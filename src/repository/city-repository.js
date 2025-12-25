const { City } = require('../models/city');

class CityRepository {
    async createCity ({name}) { // destructuring the object then and there
        try {
            const city = await City.create({name});
            return city;
        } catch (error){
            throw {error};
        }
    }

    async deleteCity (cityId) {
        try {
            await City.destroy({
                where :{
                    id : cityId
                }
            });
        } catch(error){ // to catch database lvl errors
            throw {error};
        }
    }
}

module.exports = CityRepository;
