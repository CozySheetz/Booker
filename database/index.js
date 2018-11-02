var mysql = require('mysql');
var { connection } = require('./configRDS.js');
// var { connection } = require('./configLOCAL.js');
 
connection.connect();

const saveBooking = (booking, callback) => {
  var sql = `insert into bookings (listing_id, start_day, end_day, total_cost, total_guests) values (?, ?, ?, ?, ?)` 
	var input = booking;
	console.log('INPUT AT DB', input)

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
			callback(null, err);
		} else {
			callback(result, null);
		}
	})
}

const getListing = (listingId, callback) => {
	var sql = `select * from listings where id = ${listingId}`;

	connection.query(sql, (err, result) => {
		if (err) {
			callback(null, err);
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

const saveUnavailabilities = (unavailabilities, callback) => {

	// var inputs = unavailabilities.map((unavail) => {
	// 	return unavail.join(', ')
	// })

	var inputs = unavailabilities;

	// var sqlInput = '';
	// input.forEach((unavailability) => {
	// 	sqlInput += `(${unavailability})`
	// })

	console.log('INPUT AT DB UNAVAILS', inputs)
	
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];
		console.log('INPUTTTTT', input);

		var sql = `insert into unavailabilities (listing, month_day_year, booked) values (?, ?, ?)
		` 
		connection.query(sql, input, (err, result) => {
			if (err) {
				console.log(err);
			} else {
				callback(result);
			}
		})

	}
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
module.exports.saveUnavailabilities = saveUnavailabilities;