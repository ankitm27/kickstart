pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] public deployedCampaigns;
    function createCampaign(uint minimum) public{
        address newCampaign = new Campaign(minimum,msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaign() public view returns (address[]){
        return deployedCampaigns;
    }
}
contract Campaign{
    address public manager;
    uint public minimumContribution;
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCounts;
        mapping(address => bool) approvals;   
    }
    Request[] public requests;
    mapping(address => bool) public approvals;
    uint public approvalCounts;
    
    modifier restricted (){
        require(msg.sender == manager);
        _;
    }
    
    function Campaign(uint minimum,address creator) public{
        manager = creator;
        minimumContribution = minimum;
    }
    
    function contribute() public payable{
        require(msg.value > minimumContribution);
        approvals[msg.sender] = true;
        approvalCounts ++;
        
    }
    
    function createRequest(string description, uint value,address recipient) public restricted{
        require(approvals[msg.sender]);
        Request memory newRequest = Request({
            description:description,
            value:value,
            recipient:recipient,
            complete:false,
            approvalCounts:0
        });
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        require(approvals[msg.sender]);
        Request storage request = requests[index];
        require(!request.approvals[msg.sender]);
        request.approvalCounts ++;
        request.approvals[msg.sender] = true;
    }
    
    function finalizeRequest(uint index) public restricted{
        Request storage request = requests[index];
        require(request.approvalCounts > (approvalCounts/2));
        require(!request.complete);
        request.recipient.transfer(request.value);
        request.complete = true;
        
    }
    
}