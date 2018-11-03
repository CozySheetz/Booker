const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const moment = require('moment');
const { getListing } = require('./../database/index.js');
const { getUnavailabilities } = require('./../database/index.js');
const { saveBooking } = require('./../database/index.js');
const { saveUnavailabilities } = require('./../database/index.js');

const app = express();
const port = process.env.PORT || 3003;

// Middleware:
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// Routes:
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/listings:id', (req, res) => {
  var listingId = req.params.id;

  getListing(listingId, (data, err) => {
    if (err) {
      console.log('listing api error:', err)
    } else {
      console.log('data from db', data);
      res.send(data);
    }
  });
    
})

app.get('/unavailabilities/:id', (req, res) => {
  var listingId = req.params.id;

  getUnavailabilities(listingId, (data) => {
    res.send(data);
  });
    
})

app.post('/bookings', (req, res) => {
  var data = req.body;

  //condition start day for db
  var start_day = data.start_day.slice(0, 10).split('-').reverse();
  start_day[2].slice(2);
  var temp = start_day[0];
  start_day[0] = start_day[1];
  start_day[1] = temp;
  start_day = start_day.join('-');
  
  // condition end day for db
  var end_day = data.end_day.slice(0, 10).split('-').reverse();
  end_day[2].slice(2);
  var temp = end_day[0];
  end_day[0] = end_day[1];
  end_day[1] = temp;
  end_day = end_day.join('-');

  // condition unavails for db
  var unavailabilities = []
  var start_moment = moment(start_day, "MM-DD-YYYY");
  var end_moment = moment(end_day, "MM-DD-YYYY");
  
  var dates = []
  while (start_moment <= end_moment) {
    dates.push(start_moment.toDate());
    start_moment = start_moment.clone().add(1, 'd');
  }
  
  for (var i = 0; i < dates.length; i++) {
    var date = moment(dates[i]).format("MM-DD-YY");
    unavailabilities.push([data.listing_id, date, 1])
  }

  // save booking and unavailabilities to db
  var booking = [];
  booking.push(data.listing_id, start_day, end_day, data.total_cost, data.total_guests)

  saveBooking(booking, (response1) => {
    saveUnavailabilities(unavailabilities, (response2) => {
      res.send()
    });
  })
})

app.get('/rooms/*', (req, res) => {
  res.setHeader('content-type', 'text/html');
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
})

// set up port connection
app.listen(port, function() {
  console.log('listening on port 3003!');
});
  
  