MEDICHAIN  :- RECORD BOOK OF PATIENTS



			PUBLIC TEST network Deployment Details


```make change in files

```Change truffle config file 

const { projectId, mnemonic } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${projectId}`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
   },
   
****<cmd>npx truffle console --network ropsten
truffle(ropsten)> await web3.eth.getAccounts()
</cmd>
<cmd> npx truffle migrate --network ropsten</cmd>
<cmd>npm start</cmd>
****



   network : ropsten
   network_id: 3
   
   Deployment details
   
    transaction hash:    0xf11ee6c234bb429595a2a4911aa02f3531a162c66797ecb65e7c5f8db43a95f9
    Blocks: 4            Seconds: 53
    contract address:    0x0997F1a102e27789aF2Bb55736143fBa0c29b184
    block number:        13044296
