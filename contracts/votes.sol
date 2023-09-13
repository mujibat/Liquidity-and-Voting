// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;


contract VotingSystem {
    struct Voter {
        uint voterid;
        bool voteridused;
        bool haveVoted;
    }
    struct VotingProcess{
        bool allowtoVote;
        uint voteCount;
        
    }

    address voteGovt;
    mapping(address=> VotingProcess) _votegovt;

    constructor () {
        voteGovt = msg.sender;
    }
    modifier chairPerson() {
       require( msg.sender == voteGovt, "Only Chairperson should allowed to supervise voting");
       _;
    }
    mapping(uint => Voter) _voter;

    function registerToVote(uint _id) external chairPerson{
        VotingProcess storage votegovt = _votegovt[msg.sender];
         Voter storage voter = _voter[_id];
         voter.voteridused = false; 
         voter.haveVoted = false;
         votegovt.allowtoVote = true;
         votegovt.voteCount = 0;  
    }

    function vote(uint _id) external  {
        Voter storage voter = _voter[_id];
        VotingProcess storage votegovt = _votegovt[msg.sender];
        if(voter.voteridused == false){
            votegovt.allowtoVote = true;
            voter.haveVoted = true;
            voter.voteridused = false;
            votegovt.voteCount++;
            successfulVote();
        } else { 
            reverterror();
        }
        voter.haveVoted = true;

    }
    function reverterror() internal pure returns (string memory){
        return "Voter has already Voted";
    }
    function successfulVote() internal pure returns (string memory) {
        return "Successfully Voted";
    }

}