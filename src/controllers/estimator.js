const express = require('express')
const router = express.Router();
const fs = require('fs')

//const responseTime = require('response-time');
 //const xml = require('xml')
const  Estimator = require('./estimatorCal')

const xml = require ('xml2js')

router.post('/', async (req, res) => {

    const data = {
        region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
        },
        periodType: req.body.periodType,
        timeToElapse: req.body.timeToElapse,
        reportedCases: req.body.reportedCases,
        population: req.body.population,
        totalHospitalBeds: req.body.totalHospitalBeds
        }

     const output1 = (Estimator.covid19ImpactEstimator(data))
  
    return res.status(200).json(output1);

});


router.post('/json', async (req, res) => {

    const data = {
        region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
        },
        periodType: req.body.periodType,
        timeToElapse: req.body.timeToElapse,
        reportedCases: req.body.reportedCases,
        population: req.body.population,
        totalHospitalBeds: req.body.totalHospitalBeds
        }

     const output1 = (Estimator.covid19ImpactEstimator(data))
  
    return res.status(200).json(output1);

});

router.post('/xml', async (req, res) => {
const builder = new xml.Builder({
    renderOpts: {
        pretty: false
    }
})
    const data = {
        region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
        },
        periodType: req.body.periodType,
        timeToElapse: req.body.timeToElapse,
        reportedCases: req.body.reportedCases,
        population: req.body.population,
        totalHospitalBeds: req.body.totalHospitalBeds
    }

     const output1 = (Estimator.covid19ImpactEstimator(data))
  res.type('application/xml');
res.header('Content-Type', 'text/xml');
//console.log(res.time)
 return res.status(200).send((output1));
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
       res.json(legth)
        for (var i; i<legth; i++ ){
            console.log(1)
                console.log('((logs.log).split(','))[i]')
        } 
       // console.log(((logs.log).split(','))[0])
    })

//  res.status(200).json('(logs.log)')
})
    

module.exports =  router;
