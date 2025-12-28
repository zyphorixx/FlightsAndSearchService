const { Airport } = require('../models');

class AirportRepository {
    async createAirport(data) {
        try {
            const airport = await Airport.create(data);
            return airport;
        } 
        catch (error) {
            console.log("Something went wrong at repository layer");
            throw error;        
        }
    }

    async deleteAirport(airportId) {
        try {
            const deletedCount = await Airport.destroy({
                where: { id: airportId }
            });
            if (deletedCount === 0) throw new Error('Airport not found');
            return true;
        } 
        catch (error) {
            console.log("Something went wrong at repository layer");
            throw error;        
        }
    }

    async updateAirport(airportId, data) {
        try {
            const airport = await Airport.findByPk(airportId);
            if (!airport) throw new Error('Airport not found');
            Object.assign(airport, data);
            await airport.save();
            return airport;
        } 
        catch (error) {
            console.log("Something went wrong at repository layer");
            throw error;        
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            if (!airport) throw new Error('Airport not found');
            return airport;
        } 
        catch (error) {
            console.log("Something went wrong at repository layer");
            throw error;        
        }
    }

    async getAllAirports() {
        try {
            const airports = await Airport.findAll(); 
            return airports;
        } 
        catch (error) {
            console.log("Something went wrong at repository layer");
            throw error;        
        }
    }
}

module.exports = AirportRepository;
