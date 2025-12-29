const validateCreateFlight = (req, res, next) => {

    if(
        !req.body.FlightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureAirportId ||
        !req.body.price
    ){
        return res.status(400).json({
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

