import "dotenv/config";
import { ethers } from "hardhat";
import recordDeployment from "./record-deployment";

const deployContract = async (contractName: string) => {
  const ContractFactory = await ethers.getContractFactory(contractName);
  const contract = await ContractFactory.deploy();

  await contract.deployed();

  const deploymentRecord = await recordDeployment(contractName, contract);
  console.log(`${contractName} deployed:`, deploymentRecord);
};

async function main() {
  // set the contract name(s) in here
  // NOTE: must match the <name>.sol file, ex: for Greeter.sol contractName = "Greeter"
  const contractNames = ["Greeter"];

  await Promise.all(contractNames.map(deployContract));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
