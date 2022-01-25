// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Hello {
    string private message;

    constructor(string memory _message) {
        message = _message;
    }

    function setter() public {
        message = "My first smart contract";
    }

    function setMessage(string memory _message) public {
        message = _message;
    }

    function getMessage() public view returns(string memory) {
        return message;
    }


}