const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const { injectTestDataListings } = require('./../database/populate.js');
const { injectTestDataUnavailabilities } = require('./../database/populate.js');
const { getAllFromTable } = require('./../database/index.js');
const { getListing } = require('./../database/index.js');
const { getUnavailabilities } = require('./../database/index.js');

const app = express();
const port = process.env.PORT || 3003;

// Middleware:
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes:
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/listings/:id', (req, res) => {
  var listingId = req.params.id;

  getListing(listingId, (data) => {
    console.log('data from db', data);
    res.send(data);
  });
    
})

app.get('/unavailabilities/:id', (req, res) => {
  var listingId = req.params.id;

  getUnavailabilities(listingId, (data) => {
    console.log('UNAVAILS from db', data);
    res.send(data);
  });
    
})

app.post('/book', (req, res) => {
  
})

app.get('/*', (req, res) => {
  var uri = req.url.slice(1);
  console.log('GET where * = ', uri)

  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
})

// set up port connection
app.listen(port, function() {
  console.log('listening on port 3003!');
});
  
  