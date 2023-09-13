import { ethers } from "hardhat";

async function main() {

    const [address1, votee] = await ethers.getSigners()
    const Owners = address1.address

  const vote = await ethers.deployContract("VotingSystem", [Owners]);
  const id = 1;

  await vote.waitForDeployment();

  await vote.connect(address1).registerToVote(id)
  await vote.vote(id)

  console.log(
    `  deployed to ${vote.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
