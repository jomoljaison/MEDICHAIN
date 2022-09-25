
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('verifyDoctor')
})
router.post('/',async function (req, res, next){
    data = req.body;
    console.log("inside the ",data);
    
    //method verifyDoctor,giving boolean values
        MyContract.methods.verifyDoctor(data._verifedStatus,data.id) .send({ from: coinbase, gas : 6000000 })
    .then((txn) => {
        res.send(txn);
    }).catch(err=>{
        res.json({ error : err });
    }) 
    
});

module.exports = router;