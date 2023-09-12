// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
/*
build a decentralized voting system using smart contracts.
 The system should allow users to create
  and participate in votes securely and transparently
*/

contract VotingSystem {
    struct Voter {
        uint voteridCount;
        bool haveVoted;
    }
    struct VotingProcess{
        bool allowtoVote;
        string haveVoted;
        uint voteCount;
    }

    address voteGovt;
    mapping(address=> VotingProcess) _votegovt;

    constructor () {
        voteGovt = msg.sender;
    }
    mapping(uint => Voter) _voter;

    function vote(uint _id) external  {
        Voter storage voter = _voter[_id];
        VotingProcess storage votegovt = _votegovt[msg.sender];
        if(voter.voteridCount == 0){
            votegovt.allowtoVote = true;
            voter.voteridCount += 1;
            votegovt.voteCount++;

        } else { 
            reverterror();
        }
        voter.haveVoted = true;

    }
    function reverterror() internal pure returns (string memory){
        return "Voter has already Voted";
    }

}