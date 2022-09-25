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

