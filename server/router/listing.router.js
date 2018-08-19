const express = require('express');
const router = express.Router();

//set up for pg
const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'real_estate',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 10000
}
const pool = new Pool(config);
//connections to Postgresql
pool.on('connect', ()=>{
    console.log('PostgreSQL Connected');    
});
pool.on('error',(error)=>{
    console.log('Error Connecting to PostgreSQL', error);
});

//GET 
router.get('/', function (req,res){
    console.log('In GET Route');
    const query = 'SELECT * FROM "listings";';
    pool.query(query).then((results)=>{
        console.log(results);
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error getting listings', error);
        res.sendStatus(500);
    });
})//end GET

//Exports Router to Serverjs
module.exports = router;