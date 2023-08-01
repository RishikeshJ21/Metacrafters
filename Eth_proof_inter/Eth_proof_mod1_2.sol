//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Modifier{

    uint x;
    address adminstrator;

    modifier onlyAdminstrator{
        require(msg.sender==adminstrator);
        _;
    }

    function set(uint _x) public onlyAdminstrator{
        x=_x;
    }

    function get() public view onlyAdminstrator returns (uint){
        return x;
    }

}