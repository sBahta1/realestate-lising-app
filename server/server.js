//Requirements 


const express =require('express');
const app =express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const listingsRouter = require('./router/listing.router');
const rentRouter = require('./router/rent.router');
const saleRouter = require('./router/sale.router');


//configuration for bodyparser
app.use(bodyParser.json());

//setup for routes
app.use('/listings', listingsRouter);
app.use('/rent', rentRouter);
app.use('/sale', saleRouter);

//Static Files
app.use(express.static('server/public'));

//Spin Up Server
app.listen(PORT, () =>{
    console.log('Server Running on Port:', PORT);
});