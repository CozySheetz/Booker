const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const { injectTestDataListings } = require('./../database/populate.js');
const { injectTestDataUnavailabilities } = require('./../database/populate.js');
const { getAllFromTable } = require('./../database/index.js');
const { getListing } = require('./../database/index.js');

const app = express();
const port = process.env.PORT || 3003;

// Middleware:
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes:
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/sampleData', (req, res) => {
  injectTestDataListings();
  injectTestDataUnavailabilities();
  console.log('sample data populated into database')
  res.send('sample data populated into database');
})

app.get('/', (req, res) => {
  res.send('root');
})

app.get('/*', (req, res) => {
  var uri = req.url.slice(1);
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
  // getListing(uri, (data) => {
  //   console.log('data from db', data);
  //   res.send(data);
  // })
})

app.post('/check-in', (req, res) => {
  
})

app.post('/book', (req, res) => {

})

// set up port connection

app.listen(port, function() {
  console.log('listening on port 3003!');
});


// app.get('/listings', (req, res) => {
//   getAllFromTable('listings', (data) => {
//     console.log('all data from listings table: ', data);
//     res.send(data);
//   });
// })

// app.get('/unavailability', (req, res) => {
//   getAllFromTable('unavailabilities', (data) => {
//     console.log('all data from unavailabilities table: ', data);
//     res.send(data);
//   });
// })