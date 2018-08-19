//Requirements 
const express =require('express');
const app =express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const listingsRouter = require('./router/listing.router.js');

//configuration for bodyparser
app.use(bodyParser.json());
//setup for routes
app.use('/listings', listingsRouter)

//Static Files
app.use(express.static('server/public'));

//Spin Up Server
app.listen(PORT, () =>{
    console.log('Server Running on Port:', PORT);
});