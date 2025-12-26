const { City } = require('../models/city');

class CityRepository {
    async createCity ({name}) { // destructuring the object then and there
        try {
            const city = await City.create({name}); // fetching the object
            return city;
        } 
        catch (error){
            console.log("Something went wrong in the repository layer");
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
            return true;
        }
        catch(error){ // to catch database lvl errors
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity (data , cityId) {  // data is also an object
        try {
            const city = await City.update(data, {
                where: {
                    id : cityId
                }
            });
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
           const city = await City.findByPk(cityId);

           // city object fetch krte hain findByPk() se
           // Agar city mil jaati hai to city object return hoga
           // Agar nahi milti to null return hoga

           return city;
        } 
        catch (error) {
           console.log("Something went wrong in the repository layer");
           throw { error };
        }
    }
}

module.exports = CityRepository;
