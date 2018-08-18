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


//Exports Router to Serverjs
module.exports = router;