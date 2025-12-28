const CityRepository = require('./city-repository');
const AirportRepository = require('./airport-repository');

module.exports = {
  CityRepository,
  AirportRepository
};

// dekho hmne ye index.js iss liye create ki hai kyunki suppose hmne bhot sari repositories create ki jaise city repo, flight repo etc. toh hme har file ko separately export krna pdega... Usse better hai hum ek file se hi sari files ko export krdein