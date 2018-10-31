var mysql = require('mysql');

// set up connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'booker'
});
 
connection.connect();

const saveBooking = (booking, callback) => {
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

const getAllFromTable = (table, callback) => {
	var sql = `select * from ${table}`;
	
	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			callback(result);
		}
	})
}

const getListing = (listingId, callback) => {
	var sql = `select * from listings where id = ${listingId}`;

	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			callback(result)
		}
	})
}

const getUnavailabilities = (listingId, callback) => {
	var sql = `select * from unavailabilities where listing = ${listingId}`;

	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			callback(result)
		}
	})
}


// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	//   if (error) throw error;
	//   console.log('The solution is: ', results[0].solution);
	// });
	
module.exports.saveBooking = saveBooking;
module.exports.connection = connection;
module.exports.getAllFromTable = getAllFromTable;
module.exports.getListing = getListing;
module.exports.getUnavailabilities = getUnavailabilities;