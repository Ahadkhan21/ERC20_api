// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; // import IERC20.sol from openzeppelin library

//import "./ERC___20.sol";

contract StoreContract is ERC20 {

  address payable public owner;
  mapping (address=>uint) private balances;
constructor()ERC20('USDT','USD'){
  
   owner = payable(msg.sender);
    _mint(owner,100000*10**18);
}

}