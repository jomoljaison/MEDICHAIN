var express = require('express');
var router = express.Router();

//events listing

router.get('/', function (req, res, next) {
    MyContract.getPastEvents('regid',{
        fromBlock:0 ,
        toBlock:'latest'
    },(err,events)=>{
        console.log("REGISTER  events",events)
        eventArr=[];
        for (var i = 0; i <= (events.length - 1); i++) {
            events[i];
eventArr.push({id:i,transactionhash: events[i].transactionHash,blocknumber:events[i].blockNumber,id: events[i].returnValues[0],name: events[i].returnValues[1]});
if(eventArr.length == events.length)
res.render("regid",{eventArray:eventArr})

            }
        });
  
});

module.exports = router;