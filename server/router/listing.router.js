//All request that are not rent or sale specific will be in here.

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//Post route for new listings
router.post('/home', (req, res) => {
    const newListing = req.body;
    const query = `INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path")
                   VALUES ($1, $2, $3, $4, $5);`;
    pool.query(query, [newListing.cost, newListing.sqft, newListing.type, newListing.city, newListing.image_path])
.then(() => {
    res.sendStatus(200);
}).catch((error) => {
    console.log('Error POSTing New Listing', error);
    res.sendStatus(500);
    });
});


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
});

//Exports Router to Serverjs
module.exports = router;
