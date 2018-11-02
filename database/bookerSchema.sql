DROP DATABASE IF EXISTS booker;

CREATE DATABASE booker;

USE booker;

CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT,
  daily_rate INT,
  cleaning_fee INT,
  service_fee INT,
  special_flag INT,
  rating INT,
	views INT,
	max_guests INT NOT NULL,
	ratings_count INT,
	PRIMARY KEY (id)
);

CREATE TABLE unavailabilities (
  id INT NOT NULL AUTO_INCREMENT,
	listing INT,
	month_day_year VARCHAR(10),
	booked INT,
	PRIMARY KEY (id),
	FOREIGN KEY (listing) REFERENCES listings(`id`)
);

CREATE TABLE bookings (
	id INT NOT NULL AUTO_INCREMENT,
	listing_id INT,
	start_day VARCHAR(10),
	end_day VARCHAR(10),
	total_cost INT,
	total_guests INT,
	PRIMARY KEY (id),
	FOREIGN KEY (listing_id) REFERENCES listings(`id`) 
);

-- mysql -u root < database/bookerSchema.sql

-- mysql -h booker.cp4l5wq0pfkx.us-east-2.rds.amazonaws.com -P 3306 -u kapolyak -p