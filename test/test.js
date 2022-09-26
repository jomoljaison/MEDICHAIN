var json = artifacts.require("Medical");
const abi = json['abi'];
const bytecode = json['bytecode'];

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  AbiReg = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '4000000' });
})
contract('Medical', () => {

  // Test for deploy of contract

  it('deploys a contract', async () => {
    const addressOfsc = await AbiReg.options.address;
    assert.ok(addressOfsc, 'Test Failed!!!!');
  })

  //Test for New doctor Registration

  it('Doctor detail added', async () => {
    admin = accounts[1];
    try {
      Registraction_details1 = await AbiReg.methods.setnewAdmin(admin).send({ from: accounts[0], gas: 400000 });

      assert.equal(Registraction_details1[1], admin, "test failed!!!!");

      await AbiReg.methods.Regdoc(1,"Abin","male","govt","surgeon","allopathy","kerala state counsil").send({ from: admin, gas: 4000000 });

      Registraction_details2 = await AbiReg.methods.getDoc(1).call({ from: admin });

      assert.equal(Registraction_details2[0], 1, "test failed!!!!");
      assert.equal(Registraction_details2[1], "Abin", "test failed!!!!");
      assert.equal(Registraction_details2[2], "male", "test failed!!!!");
      assert.equal(Registraction_details2[3], "govt", "test failed!!!!");
      assert.equal(Registraction_details2[4], "surgeon", "test failed!!!!");
      assert.equal(Registraction_details2[5], "allopathy", "test failed!!!!");
      assert.equal(Registraction_details2[6], "kerala state counsil", "test failed!!!!");


    } catch (err) {
      assert(err);
      console.log(err);
    }
  })
  //Test for New patient Registration

  it('Patients detail added', async () => {
    admin = accounts[1];
    try {
    
      await AbiReg.methods.Regpatit("Subin","male",1664167559,2,"A+").send({ from: admin, gas: 4000000 });


      assert.equal(Registraction_details2[0], 11, "test failed!!!!");
      assert.equal(Registraction_details2[1], "Subin", "test failed!!!!");
      assert.equal(Registraction_details2[2], "male", "test failed!!!!");
      assert.equal(Registraction_details2[3], 1664167559, "test failed!!!!");
      assert.equal(Registraction_details2[4], 2, "test failed!!!!");
      assert.equal(Registraction_details2[5], "A+", "test failed!!!!");


    } catch (err) {
      assert(err);
      console.log(err);
    }
  })

  // Test to make diagnosis

  it('diagnosis patient', async () => {
    admin = accounts[1];
    try {
      await AbiReg.methods.Regdoc(1,"Abin","govt","surgeon","allopathy","kerala state counsil").send({ from: admin, gas: 4000000 });

      await AbiReg.methods.verifyDoctor(1,1).send({ from: admin, gas: 4000000 });

      await AbiReg.methods.Regpatit("Subin","male",1664167559,2,"A+").send({ from: admin, gas: 4000000 });

      await AbiReg.methods.diagnosis(11,1,"cold and flu", "hadache", "dol0650").send({ from: admin, gas: 4000000 });
     
       Registraction_details1 = await AbiReg.methods.viewRequest(123456789012).call({ from: currentOwner });

      
    } catch (err) {
      assert(err);
      console.log(err);
    }
  })

})
