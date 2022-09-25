
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('Regpatit')
})

router.post('/',async function (req, res, next){
    data = req.body;
    console.log("inside the ",data);
    function epoch (date) {
        return Date.parse(date)
      }
      //calculating age after giving dob
      const birthDate = new Date(req.body.dob) 
      const timestamp = epoch(birthDate)
      

      var difference=Date.now() - birthDate.getTime(); 
	 	 
      var  ageDate = new Date(difference); 
      var calculatedAge=   Math.abs(ageDate.getUTCFullYear() - 1970);
      
    // method Regpatit , registering  patient with name,_gender,dob,age,blood
            MyContract.methods.Regpatit(data.name,data._gender,timestamp,calculatedAge,data.blood) .send({ from: coinbase, gas : 6000000 })
    .then((txn) => {
        res.send(txn);
    }).catch(err=>{
        res.json({ error : err });
    }) 
    
});

module.exports = router;