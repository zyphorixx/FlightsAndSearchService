const validateCreateFlight = (req, res, next) => {
const { ClienterrorCodes } = require('../utils/error-codes');

    if(
        !req.body.FlightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureAirportId ||
        !req.body.price
    ){
        return res.status(ClienterrorCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            meassage : 'Invalid request body to create flight',
            err : 'Missing properties to create a flight'
        });
    }

    next();
}

module.exports = {
    validateCreateFlight
}

