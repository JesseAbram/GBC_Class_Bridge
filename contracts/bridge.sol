pragma solidity 0.5.1;

contract bridge {
    
    
    address payable owner; 
    event Bridge (address indexed, uint);
    
    constructor () public {
        owner = msg.sender;
    }
    
    
    function connect() public payable  {
        owner.transfer(msg.value);
        emit Bridge(msg.sender, msg.value);
    } 
}
