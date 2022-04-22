import { resolve } from "path";
import { network } from "hardhat";
import { writeFile, mkdir, stat } from "fs/promises";
import type { Contract } from "ethers";

export interface IContractDeploymentRecord {
  deployedAt: string;
  ownerAddress: string;
  contractAddress: string;
  network: {
    name: string;
    chainId: number | string;
  };
}

const recordDeployment: (
  contractName: string,
  deployedContract: Contract
) => Promise<IContractDeploymentRecord> = async (
  contractName,
  deployedContract
) => {
  if (!deployedContract.address)
    throw new Error("Contract has not been deployed");

  const ownerAddress = await deployedContract.signer.getAddress();

  const deploymentRecord: IContractDeploymentRecord = {
    ownerAddress,
    deployedAt: new Date().toISOString(),
    contractAddress: deployedContract.address,
    network: {
      name: network.name,
      chainId: network.config.chainId || "hardhat-ephemeral-node",
    },
  };

  const dirPath = resolve(__dirname, `../deployments`);

  await stat(dirPath).catch(async () => {
    console.log("Creating deployments dir");
    await mkdir(dirPath);
  });

  const deploymentRecordPath = resolve(dirPath, `${contractName}.json`);

  console.log("Writing deployment record to:", deploymentRecordPath);

  await writeFile(
    deploymentRecordPath,
    JSON.stringify(deploymentRecord, null, 2)
  );

  return deploymentRecord;
};

export default recordDeployment;
