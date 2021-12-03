const request = require('request');

const fetchBreedDescription = (breedChoice, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedChoice}`;
  request.get(url, (error, response, body) => {
    if (error) {
      callback(null, error);
    } else if (!breedChoice) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(error, null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
