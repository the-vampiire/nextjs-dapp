# Next.js + Hardhat DApp Starter

> structure

```sh
<root>/
  client/ <-- [web2] client / api using next.js
  solidity/ <-- [web3] contract code / tests / tasks using hardhat and ethers.js
  package.json <-- scripts to control each component or together as a system
```

## usage

### client

the client `client/tsconfig.json` has aliases set up for importing:

- `styles/*`: any CSS in the `client/styles/` dir
- `contracts/*`: any contract ABI in `solidity/artifacts/contracts/<ContractName.sol>/<ContractName>.json`

> example

```ts
// global
import "styles/globals.css";
// CSS module
import styles from "styles/Home.module.css";
// contract ABI
import GreeterABI from "contracts/Greeter.sol/Greeter.json";
```


### scripts

the top-level `package.json` contains scripts to run the `client/` and `solidity/` scripts individually or as a system

- individual: `npm run client: -- <script>` or `npm run solidity: -- <script>`
- together: top-level scripts (below)

1. install (installs deps for client and solidity components)

```sh
npm install
```

2. run dev mode (compiles solidity and runs next.js dev mode)

```sh
npm run dev
```

3. compile both for prod

```sh
npm run build
```