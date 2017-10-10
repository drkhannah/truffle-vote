Simple Dapp that lest you vote on a testrpc blockchain. Authentication is also performed on the blockchain.

## Installation

Install truffle and an ethereum client. For local development, try EthereumJS TestRPC.

`npm install -g truffle // Version 3.0.5+ required.`

`npm install -g ethereumjs-testrpc`

## Install Dependencies
in the project root directory run:

`npm install`

## Start local blockchain

`testrpc`

## Compile and migrate the contracts.

in the project root directory run:

`truffle compile`

`truffle migrate`

## Serve Project

`npm run start`

## Copy Mneumonic phrase into MetaMask
Install the MetaMask Chrome extension. Connect to testrpc network. Copy Mneumonic phrase into MetaMask. Select an account in MetaMask