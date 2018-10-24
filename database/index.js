var mysql = require('mysql');

// set up connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'booker'
});
 
connection.connect();

var saveBooking = (booking, callback) => {
  var sql = `insert into bookings (id, etc) values (?, ?)` 
	var input = [x, y];

	connection.query(sql, input, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			callback(result);
		}
	})
} 



// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	//   if (error) throw error;
	//   console.log('The solution is: ', results[0].solution);
	// });
	
module.exports.saveBooking = saveBooking;
module.exports.connection = connection;