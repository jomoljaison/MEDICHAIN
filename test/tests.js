var json = artifacts.require("landRegistration");
const abi = json['abi'];
const bytecode = json['bytecode'];

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  medi = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '4000000' });
})
contract('Medical', () => {

  // Test for deploy of contract

  it('deploys a contract', async () => {
    const mediRegAddress = await medi.options.address;
    assert.ok(mediRegAddress, 'Test Failed!!!!');
  })

  //Test for New Land Registration


  //Test to make Land available to sale

  it('land made available to sale', async () => {

    currentOwner = accounts[4];
    requester = accounts[2];
    try {
      await medi.methods.Regdoc("Vihari", "male", "govt", "surgeon", "officer", "andra stateCouncil", 123456789012).send({ from: accounts[0], gas: 4000000 });
      await medi.methods.makeAvailableToSale(123456789012).send({ from: currentOwner, gas: 4000000 });
      landRegisteredDetails = await landReg.methods.viewDetailsBuyer(123456789012).call({ from: requester });

      assert.equal(landRegisteredDetails[0], currentOwner, "test failed!!!!");
      assert.equal(landRegisteredDetails[1], 5, "test failed!!!!");
      assert.equal(landRegisteredDetails[2], true, "test failed!!!!");
      assert.equal(landRegisteredDetails[3], 0x0000000000000000000000000000000000000000, "test failed!!!!");
      assert.equal(landRegisteredDetails[4], 0, "test failed!!!!");
      assert.equal(landRegisteredDetails[5], 0, "test failed!!!!");
      assert.equal(landRegisteredDetails[6], 123456789012, "test failed!!!!");

    } catch (err) {
      assert(err);
      console.log(err);
    }
  })

  // Test to Request an Available Land

  it('request to land owner', async () => {

    currentOwner = accounts[4];
    requester = accounts[2];

    try {
      await landReg.methods.Registration("Kerala", "Kottayam", "Kanakkary", 23, 5, currentOwner, 123456789012).send({ from: accounts[0], gas: 4000000 });
      await landReg.methods.makeAvailableToSale(123456789012).send({ from: currentOwner, gas: 4000000 });
      await landReg.methods.requestToLandOwner(123456789012, 5).send({ from: requester, gas: 400000 });
      await landReg.methods.processRequest(123456789012, 3).send({ from: currentOwner, gas: 4000000 });
      landRegisteredDetails1 = await landReg.methods.viewRequest(123456789012).call({ from: currentOwner });

      assert.equal(landRegisteredDetails1[0], requester, "test failed!!!!");
      assert.equal(landRegisteredDetails1[1], 5, "test failed!!!!");
    } catch (err) {
      assert(err);
      console.log(err);
    }
  })

  // Request to buy a Land

  it('buyProperty', async () => {

    currentOwner = accounts[4];
    ownerBalance = web3.utils.fromWei((await web3.eth.getBalance(currentOwner)).toString(), 'ether');
    console.log('Owner Balance : ', ownerBalance);
    requester = accounts[2];
    requesterBalance = web3.utils.fromWei((await web3.eth.getBalance(requester)).toString(), 'ether');
    console.log('Requester Balance : ', requesterBalance);
    mediRegAddress = await landReg.options.address;
    contractBalance = await web3.eth.getBalance(mediRegAddress);
    console.log('Contract balance : ', contractBalance);
    property = 123456789012;
    value1 = 5;
    try {
      await landReg.methods.Registration("Kerala", "Kottayam", "Kanakkary", 23, 5, currentOwner, 123456789012).send({ from: accounts[0], gas: 4000000 });
      await landReg.methods.makeAvailableToSale(123456789012).send({ from: currentOwner, gas: 4000000 });
      await landReg.methods.requestToLandOwner(123456789012, 5).send({ from: requester, gas: 400000 });
      await landReg.methods.processRequest(123456789012, 3).send({ from: currentOwner, gas: 4000000 });
      await landReg.methods.buyProperty(123456789012).send({
        from: requester,
        value: web3.utils.toWei(value1.toString(), 'ether'), gas: 4000000
      });

      CurrentrequesterBalance = web3.utils.fromWei((await web3.eth.getBalance(requester)).toString(), 'ether');
      CurrentOwnerBalance = web3.utils.fromWei((await web3.eth.getBalance(currentOwner)).toString(), 'ether');

      console.log('CurrentOwnerBalance', CurrentOwnerBalance);
      console.log('CurrentRequesterBalance', CurrentrequesterBalance);

      Difference1 = Math.ceil(CurrentOwnerBalance - ownerBalance);
      console.log('Difference1', Difference1)

      Difference2 = Math.floor(requesterBalance - CurrentrequesterBalance);
      console.log('Difference2', Difference2);

      assert.equal(Difference1, Difference2, "TestFailed!!!!");
    } catch (err) {
      assert(err);
      console.log(err);
    }
  })
})
Footer
