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
pool.on('connect', () => {
    console.log('PostgreSQL Connected');
});
pool.on('error', (error) => {
    console.log('Error Connecting to PostgreSQL', error);
});

//GET properties by 'rent' "type"
router.get('/rent', function (req, res) {
    console.log('In GET Route');
    const query = `SELECT * FROM "listings" WHERE "type" ilike 'rent'; `
    pool.query(query).then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error getting listings', error);
        res.sendStatus(500);
    });
})//end GET

//GET properities by 'sale' "type"
router.get('/sale', function (req, res) {
    console.log('In GET Route');
    const query = `SELECT * FROM "listings" WHERE "type" ilike 'sale'; `
    pool.query(query).then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error getting listings', error);
        res.sendStatus(500);
    });
})//end GET

//Delete Route: TARGETS LISTING BY SERIALLY GENERATED DB ID
router.delete('/:id', function (req, res) {
    const listingId = req.params.id;
    const query = `DELETE FROM "listings" WHERE "id" = $1;`;
    pool.query(query, [listingId]).then((result) => {
        console.log(result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
})

//Exports Router to Serverjs
module.exports = router;