export const PerpetualDEXABI = [
    {
      "type": "constructor",
      "inputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "DIA_ORACLE",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "addSupportedAsset",
      "inputs": [
        {
          "name": "_asset",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "_oracleKey",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_maxLeverage",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_maintenanceMargin",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "checkPriceValidity",
      "inputs": [
        {
          "name": "_asset",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "closePosition",
      "inputs": [
        {
          "name": "_asset",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "collateral",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getLatestPrice",
      "inputs": [
        {
          "name": "_asset",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "liquidate",
      "inputs": [
        {
          "name": "_trader",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "_asset",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "openPosition",
      "inputs": [
        {
          "name": "_asset",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "_isLong",
          "type": "bool",
          "internalType": "bool"
        },
        {
          "name": "_size",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_leverage",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "positions",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "trader",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "isLong",
          "type": "bool",
          "internalType": "bool"
        },
        {
          "name": "margin",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "size",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "entryPrice",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "liquidationPrice",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportedAssets",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "oracleKey",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "maxLeverage",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "maintenanceMargin",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "latestPrice",
          "type": "uint128",
          "internalType": "uint128"
        },
        {
          "name": "timestampOfLatestPrice",
          "type": "uint128",
          "internalType": "uint128"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        {
          "name": "newOwner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "updateAssetPrice",
      "inputs": [
        {
          "name": "_asset",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Liquidation",
      "inputs": [
        {
          "name": "trader",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "asset",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "liquidationPrice",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "previousOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "newOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "PositionClosed",
      "inputs": [
        {
          "name": "trader",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "asset",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "isLong",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
        },
        {
          "name": "profit",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "PositionOpened",
      "inputs": [
        {
          "name": "trader",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "asset",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "isLong",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
        },
        {
          "name": "size",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "entryPrice",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "PriceUpdated",
      "inputs": [
        {
          "name": "asset",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "price",
          "type": "uint128",
          "indexed": false,
          "internalType": "uint128"
        },
        {
          "name": "timestamp",
          "type": "uint128",
          "indexed": false,
          "internalType": "uint128"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "OwnableInvalidOwner",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "OwnableUnauthorizedAccount",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ]
    }
  ]
  
  