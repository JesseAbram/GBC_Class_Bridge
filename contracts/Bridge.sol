pragma solidity 0.5.1;

contract Bridge {

    address payable owner;
    event BridgeTransfer (address indexed, uint);

    constructor () public {
        owner = msg.sender;
    }

    function connect() public payable  {
        owner.transfer(msg.value);
        emit BridgeTransfer(msg.sender, msg.value);
    }
}
