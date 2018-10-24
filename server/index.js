const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { injectTestDataListings } = require('./../database/populate.js');
const { injectTestDataUnavailabilities } = require('./../database/populate.js');

const app = express();
const port = process.env.PORT || 3003;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/test', (req, res) => {
  console.log('hi')
  res.send('hi from send')
})

app.get('/sampleData', (req, res) => {
  injectTestDataListings();
  injectTestDataUnavailabilities();
  
  console.log('sample data populated into database')
  res.send('sample data populated into database');
})

app.get('/listing', (req, res) => {

})

app.get('/availability', (req, res) => {

})

app.post('/check-in', (req, res) => {
  
})

app.post('/book', (req, res) => {

})



// set up port connection

app.listen(3003, function() {
  console.log('listening on port 3000!');
});