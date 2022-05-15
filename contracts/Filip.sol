// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Filip is ERC20 {
    constructor(uint256 _Supply) ERC20("Filip", "FIL") {
        _mint(msg.sender, _Supply * (10 ** decimals()));
    }
} 