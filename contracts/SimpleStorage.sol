pragma solidity ^0.8.0;

contract SimpleStorage {
    uint public data;

    function updateData(uint _data) external {
        data = _data;

    }

    function reeadData() external view returns (uint) {
        return data; 
    }

}