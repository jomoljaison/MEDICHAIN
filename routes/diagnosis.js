
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('diagnosis')
})

router.post('/',async function (req, res, next){
    data = req.body;
    console.log("inside the ",data);

//method diagnosis passing values patientid,docid,name0fdise,scan,medicine
   MyContract.methods.diagnosis(data.patientid,data.docid,data.name0fdise,data.scan,data.medicine) .send({ from: coinbase, gas : 6000000 })
    .then((txn) => {
        res.send(txn);
    }).catch(err=>{
        res.json({ error : err });
    }) 
    
});

module.exports = router;