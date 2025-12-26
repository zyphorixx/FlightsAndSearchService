const CityRepository = require("./city-repository");

module.exports = {
    CityRepository : require('./city-repository')
}

// dekho hmne ye index.js iss liye create ki hai kyunki suppose hmne bhot sari repositories create ki jaise city repo, flight repo etc. toh hme har file ko separately export krna pdega... Usse better hai hum ek file se hi sari files ko export krdein