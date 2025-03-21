# Code Marketplace using MetaMask and Sepolia Testnet

## Overview

This project is a decentralized Code Marketplace where users can buy and sell code snippets using cryptocurrency. It leverages Ethereum blockchain technology, using the Sepolia testnet and MetaMask for secure transactions.

## Features

- **Decentralized Transactions**: Buy and sell code securely using smart contracts.
- **MetaMask Integration**: Users can connect their wallets to interact with the marketplace.
- **Sepolia Testnet**: Used for development and testing without real ETH.
- **Smart Contract Deployment**: Built using Solidity and deployed on the Sepolia testnet.

## Prerequisites

Ensure you have the following installed before proceeding:

1. **Node.js** (>=16.x.x)
2. **MetaMask Extension** (Installed in your browser)
3. **Hardhat** (Ethereum development environment)
4. **Ethereum Wallet with Sepolia Test ETH**
5. **Infura/Alchemy** (For connecting to the Sepolia testnet)

## Installation

1. **Clone the repository**

```sh
git clone https://github.com/your-repo/code-marketplace.git
cd code-marketplace
```

2. **Install dependencies**

```sh
npm install
```

## Smart Contract Development

1. **Navigate to the **``** folder** and create a Solidity smart contract (`Marketplace.sol`).
2. **Compile the contract**

```sh
npx hardhat compile
```

3. **Deploy the contract** (Update `hardhat.config.js` with your Infura/Alchemy API key and wallet private key.)

```sh
npx hardhat run scripts/deploy.js --network sepolia
```

4. **Note down the deployed contract address** for front-end integration.

## MetaMask Setup

1. Open MetaMask and switch to the **Sepolia Testnet**.
2. Obtain some Sepolia test ETH from [Sepolia Faucet](https://sepoliafaucet.com/).
3. Connect your MetaMask wallet to the marketplace.

## Frontend Setup

1. Open `frontend/` and install dependencies:

```sh
cd frontend
npm install
```

2. Start the development server:

```sh
npm start
```

3. Ensure MetaMask is connected and test transactions using the deployed contract.

## Testing the Marketplace

1. **List a code snippet for sale** using the front-end UI.
2. **Purchase a listed snippet** and confirm transaction completion in MetaMask.
3. **Check smart contract logs** to ensure funds transfer correctly.

## Conclusion

This Code Marketplace allows users to securely trade code using blockchain technology. Future improvements may include NFT-based ownership verification and advanced search filters.

## Troubleshooting

- If transactions fail, ensure you have enough Sepolia ETH.
- Check contract deployment logs for any errors.
- Verify MetaMask is connected to the Sepolia Testnet.

## License

This project is licensed under the MIT License.

