Simple Dapp that lest you vote on a testrpc blockchain. Authentication is also performed on the blockchain.

<h1>Installation</h1>

Install truffle and an ethereum client. For local development, try EthereumJS TestRPC.

`npm install -g truffle // Version 3.0.5+ required.`

`npm install -g ethereumjs-testrpc`

<h3>Install Dependencies</h3>
in the project root directory run:

`npm install`

<h3>Start local blockchain</h3>

`testrpc`

<h3>Compile and migrate the contracts.</h3>

in the project root directory run:

`truffle compile`

`truffle migrate`

<h3>Serve Project</h3>

`npm run start`

<h3>Copy Mneumonic phrase into MetaMask</h3>
Install the MetaMask Chrome extention. Connect to testrpc network. Copy Mneumonic phrase into MetaMask. Select an account in MetaMask