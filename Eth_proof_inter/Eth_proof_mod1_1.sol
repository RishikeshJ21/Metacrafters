//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

//Use view, pure, payable functions

contract Function{
    
    uint x=50;
    uint balance;

    function sumOfStateVar(uint y) public view returns (uint){
        return x+y;
    }

    function addtion(uint a, uint b) public pure returns(uint){
        return a+b;
    }

    function sendMoney() public payable returns (uint){
        return balance+msg.value;
    }

}