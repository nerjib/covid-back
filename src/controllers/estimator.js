const express = require('express')
const router = express.Router();
const fs = require('fs')

//const responseTime = require('response-time');
 //const xml = require('xml')
const  Estimator = require('./estimatorCal')

const xml = require ('xml2js')

router.post('/', async (req, res) => {

    
     const output1 = (Estimator.covid19ImpactEstimator(req.body.data))
  
    return res.status(201).json(output1);

});


router.post('/json', async (req, res) => {

    
     const output1 = (Estimator.covid19ImpactEstimator(data))
  
    return res.status(201).json(output1);

});

router.post('/xml', async (req, res) => {
const builder = new xml.Builder({
    renderOpts: {
        pretty: false
    }
})
    

     const output1 = (Estimator.covid19ImpactEstimator(req.body.data))
  res.type('application/xml');
res.header('Content-Type', 'text/xml');
//console.log(res.time)
 return res.status(201).send((output1));
});

router.get('/logs', async (req, res) => {
    fs.readFile('./src/db/logs.json','utf8',(err, jsonString)=>{
        if (err){
            console.log('read failed', err)
            return
        }
        const logs = JSON.parse(jsonString);
        console.log((logs.log));
        console.log(((logs.log).split(',')).length)
        const legth = ((logs.log).split(',')).length
       // console.log(legth)
       res.json('fff')
        for (var i; i<legth; i++ ){
            console.log(1)
                console.log('((logs.log).split(','))[i]')
        } 
       // console.log(((logs.log).split(','))[0])
    })

  res.status(200).json('(logs.log)')
})
    

module.exports =  router;
