const { connection } = require('./index.js')

var injectTestDataListings = (callback) => {
	connection.query(`
	insert into listings 
		(id, daily_rate, cleaning_fee, service_fee, special_flag, rating, views) 
	values 
		(1, 100, 25, 25, 0, 4, 199),
		(2, 300, 30, 25, 1, 5, 286),
		(3, 50, 20, 25, 1, 3, 522)
	`, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.status(201).send(result);
		}
	})
};

var injectTestDataUnavailabilities = (callback) => {
	connection.query(`
	insert into unavailabilities 
		(id, listing, month_day, booked) 
	values 
		(1, (select id from listings where id = 2), 101, 1),
		(2, (select id from listings where id = 2), 102, 1),
		(3, (select id from listings where id = 2), 106, 1),
		(4, (select id from listings where id = 2), 107, 0),
		(5, (select id from listings where id = 2), 108, 0),
		(6, (select id from listings where id = 2), 112, 1),
		(7, (select id from listings where id = 2), 113, 1)
	`, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.status(201).send(result);
		}
	})
}

module.exports.injectTestDataListings = injectTestDataListings;
module.exports.injectTestDataUnavailabilities = injectTestDataUnavailabilities;
