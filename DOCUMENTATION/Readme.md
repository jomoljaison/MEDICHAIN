MEDICHAIN
RECORD BOOK OF PATIENTS

Setting Up:

Step 1: Download the repostory using the command:

Git Clone https://github.com/jomoljaison/MEDICHAIN.git

In order to run this project locally in your computer you need the following packages installed in your System and the commands to install the packages are given below:

Step 2 You need to install Nodejs

<command> : npm install nodejs

 Download ganache :https://www.trufflesuite.com/ganache
Step 3 Install the all dependecies using these commands:

1. sudo apt-get install npm
2. npm install
3. npm install express-generator
4. npm install web3
5. npm install truffle
Step 4 / Open ganache

Create new workspace

			1.Workspace name : Escrow

			2.Server : Hostname------  127.0.0.1-lo

		      		   Port Number---- 7545

		            	   Network ID----- 5777
					   
			3.Save workspace
Step 5 Change coinbase address in app.js and addresss in migration file

Step 6 Change contract environment to Web3 provider

Step 7 Use the following command to deploy the smart contract to the connected chain:

   <command> : truffle migrate
Step 8 Run the dapp using the command

   <command> :  npm start  localhost:3000
Step 9 The first page that will appear is register page of doctors.Doctors can register to MEDICHAIN their own.By giving id,name, gender,category,post,discipline,stateCouncil

while registering a keccak256 id will generate .

Step 10 Only Admin can verify doctor,if the doctor is qualified means admin set doctor as verified id:1234563 bool:true/false

Step 11 View request tab is viewing events after the registeration doctor in event page it will show transaction hash ,block number ,doctor id and doctor name

Step 12 next tab is for registering patient.registeration of patients is by hospital staff name,gender,date of birth,and blood group name:"Deepu" gender:male date of birth:14/7/2000

          while giving these details it will generate keccak256 id for patient and age will calculate in js and will pass to blockchain       
Step 13 Diagnosis patient ,Only verified doctor can open patients record book ,by giving doctor id

Step 6 patient tab for listing patients details



			PUBLIC TEST network Deployment Details
```````Change truffle config file 

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
<cmd>
npx truffle console --network ropsten
truffle(ropsten)> await web3.eth.getAccounts()
</cmd>
<cmd> npx truffle migrate --network ropsten</cmd>
<cmd>npm start</cmd>




   network : ropsten
   network_id: 3
   
   Deployment details
   
    transaction hash:    0xf11ee6c234bb429595a2a4911aa02f3531a162c66797ecb65e7c5f8db43a95f9
    Blocks: 4            Seconds: 53
    contract address:    0x0997F1a102e27789aF2Bb55736143fBa0c29b184
    block number:        13044296
