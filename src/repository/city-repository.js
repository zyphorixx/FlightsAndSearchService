const { City } = require('../models');
const { Op } = require('sequelize');

class CityRepository {

    async createCity ({name}) { // destructuring the object then and there
        try {
            console.log("Repo createCity name:", name);
            const city = await City.create({name}); // fetching the object
            return city;
        } 
        catch (error){
            console.log("Something went wrong in the repository layer");
            throw error;
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
            throw error;
        }
    }

    async updateCity (data , cityId) {  // data is also an object
        try {
            // const city = await City.update(data, {
            //     where: {
            //         id : cityId
            //     }
            // });
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw error;
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
           throw error;
        }
    }

    async getAllCities(filter) {
    try {
      // Agar filter me name aaya
    if (filter.name) {
      const cities = await City.findAll({
        where: {
          name: {
            [Op.startsWith]: filter.name // starts with filter.name
          }
        }
      });
      return cities;
    }

    // Agar koi filter nahi hai
    const cities = await City.findAll();
    return cities;

    } 
    catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
    }
}

module.exports = CityRepository;
