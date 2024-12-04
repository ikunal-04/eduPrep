// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {PerpetualDEX} from "../src/Perpex.sol";

contract CounterScript is Script {
    function setUp() public {}

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        
        PerpetualDEX perpetualDEX = new PerpetualDEX();
        console.logAddress(address(perpetualDEX));

        vm.stopBroadcast();
    }
}
