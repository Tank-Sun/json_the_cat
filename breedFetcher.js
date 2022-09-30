const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const API_URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(API_URL, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(`Sorry, the requested breed is not found.`, null);
    }
    return callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };