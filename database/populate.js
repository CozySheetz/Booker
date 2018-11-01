const { connection } = require('./index.js')

var injectTestDataListings = () => {
	connection.query(`
	insert into listings 
		(id, daily_rate, cleaning_fee, service_fee, special_flag, rating, views, max_guests, ratings_count) 
	values 
		(1, 100, 25, 25, 0, 4, 199, 3, 125),
		(2, 300, 30, 25, 1, 5, 286, 4, 46),
		(3, 50, 20, 25, 1, 3, 522, 2, 89), 
		(4, 125, 25, 25, 0, 4, 199, 3, 85),
		(5, 250, 30, 25, 1, 5, 286, 5, 166),
		(6, 75, 20, 25, 1, 4, 522, 2, 24),
		(7, 80, 25, 25, 0, 4, 250, 3, 125),
		(8, 350, 30, 25, 1, 5, 286, 4, 46),
		(9, 90, 20, 25, 1, 3, 522, 2, 89), 
		(10, 115, 25, 25, 0, 4, 199, 3, 85)
	`, (err, result) => {
		if (err) {
			console.log(err);
		}
	})
};

var injectTestDataUnavailabilities = () => {
	connection.query(`
	insert into unavailabilities 
		(id, listing, month_day_year, booked) 
	values 
		(1, (select id from listings where id = 2), '01-01-19', 1),
		(2, (select id from listings where id = 2), '01-02-19', 1),
		(3, (select id from listings where id = 2), '01-06-19', 1),
		(4, (select id from listings where id = 2), '01-07-19', 0),
		(5, (select id from listings where id = 2), '01-08-19', 0),
		(6, (select id from listings where id = 2), '01-12-19', 1),
		(7, (select id from listings where id = 2), '01-13-19', 1)
	`, (err, result) => {
		if (err) {
			console.log(err);
		}
	})
}

var generateListingsData = () => {
	var results = [];
	for (var i = 0; i < 100; i++) {
		var listing = [];
		listing.push(i);

	}	
}


module.exports.injectTestDataListings = injectTestDataListings;
module.exports.injectTestDataUnavailabilities = injectTestDataUnavailabilities;
