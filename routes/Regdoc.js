
var express = require('express');
var router = express.Router();


router.post('/',async function (req, res, next){
    data = req.body;
    console.log("inside the Add DOctor",data);
    
   
    //method Regdoc, passing values  name,_gender,_category,post,discipline,stateCouncil,false for register doctor
        MyContract.methods.Regdoc(data.name,data._gender,data._category,data.post,data.discipline,data.stateCouncil) .send({ from: coinbase, gas : 6000000 })
    .then((event) => {
        res.send(event);
    }).catch(err=>{
        res.json({ error : err });
    }) 
    
});

module.exports = router;