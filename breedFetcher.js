const request = require('request');
const args = process.argv.slice(2);
const API_URL = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;

request(API_URL, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Sorry, the requested breed is not found.`);
    } else {
      console.log(data[0].description);
    }
  }
});