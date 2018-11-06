# Booker
This module provides functionality to book a reservation for a specific Airbnb listing. It displays the current unavailabilities and rate information, and allows available dates and a permitted number of guests to be selected. Booking information is stored in a relational database which can be easily integrated with other services.

## Development:

Installing dependencies: 

```
npm install
```

To run in developer mode: 

```
npm run react dev
npm run server dev
```

Seed local MySQL:

```
npm run seed-dev
```

## Data
Data specific to this module is stored in SQL database. There are three tables:

- Listings: each record corresponds to a distinct listing.

- Unavailabilities: each record corresponds to a day that contains a booking and is related to a specific listing via foreign key. There can be as many unavailable days as there are listings. Querying unavailabilites for a specific listing is as simple as filtering this table for records where listing id matches the target listing.

- Bookings: each record corresponds to a booking submitted by a user. Unavailabilities are automatically updated.

## Production

- Requires AWS RDS instance hook up. (If you are reading this, RDS instance is currently down)
- $ npm run seed 

- AWS EC2 public ip: 18.219.227.74