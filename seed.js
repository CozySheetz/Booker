const { injectTestDataListings } = require('./database/populate.js');
const { injectTestDataUnavailabilities } = require('./database/populate.js');

injectTestDataListings();
injectTestDataUnavailabilities();