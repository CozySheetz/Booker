const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3003;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/test', (req, res) => {
  console.log('hi')
  res.send('hi from send')
})

// set up port connection

app.listen(3003, function() {
  console.log('listening on port 3000!');
});