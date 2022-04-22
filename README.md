# Next.js + Hardhat DApp Starter

> structure

```sh
<root>/
  client/ <-- [web2] client / api using next.js
  solidity/ <-- [web3] contract code / tests / tasks using hardhat and ethers.js
  package.json <-- scripts to control each component or together as a system
```

## usage

### setup

in `.vscode/` there are some recommended workspace extensions and settings. you can install those to get the best experience working with the codebase

### client

the client `client/tsconfig.json` has aliases set up for importing:

- `@styles/*`: any CSS in the `client/styles/` dir
- `@contracts/<ContractName>.sol/<ContractName>.json`: any contract artifacts in `solidity/artifacts/contracts/<ContractName.sol>/<ContractName>.json`
- `@contracts/types/<ContractName>`: typechain types for compiled contracts
- `@contracts/deployments/<ContractName>.json`: deployment records for ease of access client-side (see below)

> examples

```ts
// global
import "@styles/globals.css";
// CSS module
import styles from "@styles/Home.module.css";
// contract compiler artifacts (to access the ABI)
import GreeterContract from "@contracts/Greeter.sol/Greeter.json";
// contract types
import type { Greeter } from "@contracts/types/Greeter";
// contract deployment records
import GreeterDeployment from "@contracts/deployments/Greeter.json";
```

> contract deployment records

the `solidity/scripts/deploy.ts` script will generate and write to `solidity/deployments/<ContractName>.json` every time the contract is deployed. this record makes it easy to access the details associated with the deployment. as an example:

```json
{
  "deployedAt": "2022-04-22T21:47:01.806Z",
  "ownerAddress": "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "contractAddress": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
  "network": {
    "name": "localhost",
    "chainId": "hardhat-ephemeral-node"
  }
}
```

you can then import this file to access the addresses in the client:

```ts
import GreeterDeployment from "@contracts/deployments/Greeter.json";

const { ownerAddress, contractAddress, network } = GreeterDeployment;
...
```

### scripts

the top-level `package.json` contains scripts to run the `client/` and `solidity/` scripts individually or as a system

- individual: `npm run client: -- <script>` or `npm run solidity: -- <script>`
- together: top-level scripts (below)

1. install (installs deps for client and solidity components)

```sh
npm install
```

2. run dev mode
- compiles solidity
- runs the deploy script (and records in the `solidity/deployment/` dir)
- starts next.js dev mode as the main process

```sh
npm run dev
```

3. compile both for prod

```sh
npm run build
```