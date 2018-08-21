//This router contains only rent specific requests

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET properties by 'rent' "type"
router.get('/rent', function (req, res) {
    console.log('In GET Route');
    const query = `SELECT * FROM "listings" WHERE "type" ilike 'rent'; `;
    pool.query(query).then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error getting listings', error);
        res.sendStatus(500);
    });
});//end GET

//Exports Router to Serverjs
module.exports = router;