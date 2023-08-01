//SPDX-License-Identifier: UNLICENSED

pragma solidity  ^0.8.0;

contract GlobalFunction{
    
    address owner = msg.sender;
    uint amount = msg.value;

    function getBalance(address _addr) public view returns(uint256){
        return _addr.balance;
    }

    function transferWei(address payable _addr, uint amt) public payable{
        _addr.transfer(amt);
    }

}