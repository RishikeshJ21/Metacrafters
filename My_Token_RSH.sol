// SPDX-License-Identifier: MIT

pragma solidity >=0.8.2 <0.9.0;

//class name is My_Token_RSH

contract My_Token_RSH{                        

    // Public variable declaration 

    string public Token_Name = "Rish";        
    string public Token_Abbr = "RSH";
    uint public Total_Supply=0;

    //Mapping the variable 

    mapping(address=> uint) public balance;

    //creating the mint function

    function mint(address _address, uint _value) public {
        Total_Supply +=_value;
        balance[_address]+= _value;
    }


    //creating the burn function
    function burn(address _address,uint _value) public {
        if(balance[_address] >= _value){
            Total_Supply -= _value;
            balance[_address] -= _value;
        }
    }
}