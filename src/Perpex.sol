// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IDIAOracleV2 {
    function getValue(string memory) external view returns (uint128, uint128);
}

contract PerpetualDEX {
    address immutable DIA_ORACLE = 0x6626f442eBc679f7e35bC62E36E3c1e8820C81C9;
    // address immutable SEPOLIA_DIA_ORACLE = 0x76a4BA6e4A40Bc613821e2a468a1e94FcCa4CE83;
    string public constant ORACLE_KEY = "ETH/USD";

    uint128 public latestPrice;
    uint128 public timestampOfLatestPrice;

    struct Order {
        address trader;
        uint256 price; // price in USD
        uint256 amount; // amount in ETH
        bool isBuyOrder; // true for buy, false for sell
    }

    // Order books
    Order[] public buyOrders;
    Order[] public sellOrders;

    mapping(address => uint256) public balances;

    uint256 constant MAX_PRICE_AGE = 1 hours;

    event OrderPlaced(address indexed trader, bool isBuyOrder, uint256 price, uint256 amount);
    event OrderExecuted(address indexed trader, bool isBuyOrder, uint256 price, uint256 amount);
    event FundsDeposited(address indexed user, uint256 amount);
    event FundsWithdrawn(address indexed user, uint256 amount);

    // Modifier to check oracle data freshness
    modifier priceFresh() {
        require(block.timestamp - timestampOfLatestPrice < MAX_PRICE_AGE, "Oracle price too old");
        _;
    }

    // Fetch ETH/USD price from the DIA Oracle
    function updatePrice() public returns (uint128) {
        (uint128 price, uint128 timestamp) = IDIAOracleV2(DIA_ORACLE).getValue(ORACLE_KEY);
        require(price > 0, "Invalid price from oracle");
        latestPrice = price;
        timestampOfLatestPrice = timestamp;
        return price;
    }

    // Deposit ETH to use as collateral
    function depositFunds() external payable {
        require(msg.value > 0, "No funds sent");
        balances[msg.sender] += msg.value;
        emit FundsDeposited(msg.sender, msg.value);
    }

    // Withdraw ETH
    function withdrawFunds(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
        emit FundsWithdrawn(msg.sender, amount);
    }

    // Place a buy or sell order
    function placeOrder(bool isBuyOrder, uint256 price, uint256 amount) external priceFresh {
        require(price > 0 && amount > 0, "Invalid price or amount");
        uint256 requiredFunds = isBuyOrder ? (price * amount) / 1e18 : amount;

        if (isBuyOrder) {
            require(balances[msg.sender] >= requiredFunds, "Insufficient balance");
            balances[msg.sender] -= requiredFunds;
        }

        Order memory newOrder = Order({
            trader: msg.sender,
            price: price,
            amount: amount,
            isBuyOrder: isBuyOrder
        });

        if (isBuyOrder) {
            buyOrders.push(newOrder);
        } else {
            sellOrders.push(newOrder);
        }

        emit OrderPlaced(msg.sender, isBuyOrder, price, amount);
    }

    // Execute an order (matching logic)
    function executeOrder(uint256 orderIndex, bool isBuyOrder) external priceFresh {
        require(orderIndex < (isBuyOrder ? sellOrders.length : buyOrders.length), "Invalid order index");

        Order memory order = isBuyOrder ? sellOrders[orderIndex] : buyOrders[orderIndex];

        uint256 tradeValue = (order.price * order.amount) / 1e18;

        if (isBuyOrder) {
            require(balances[msg.sender] >= tradeValue, "Insufficient balance");
            balances[msg.sender] -= tradeValue;
            balances[order.trader] += tradeValue;
        } else {
            require(balances[order.trader] >= order.amount, "Seller has insufficient funds");
            balances[msg.sender] += order.amount;
            balances[order.trader] -= order.amount;
        }

        emit OrderExecuted(order.trader, order.isBuyOrder, order.price, order.amount);

        // Remove the order from the order book
        if (isBuyOrder) {
            _removeOrder(sellOrders, orderIndex);
        } else {
            _removeOrder(buyOrders, orderIndex);
        }
    }

    // Helper function to remove an order from the order book
    function _removeOrder(Order[] storage orders, uint256 index) internal {
        require(index < orders.length, "Invalid index");
        orders[index] = orders[orders.length - 1];
        orders.pop();
    }

    // Get all buy orders
    function getBuyOrders() external view returns (Order[] memory) {
        return buyOrders;
    }

    // Get all sell orders
    function getSellOrders() external view returns (Order[] memory) {
        return sellOrders;
    }
}
