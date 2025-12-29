function compareTime(TimeString1 , TimeString2) {
     let dateTime1 = new Date(TimeString1);
     let dateTime2 = new Date(TimeString2);

     // getTime() : Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
     return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
    compareTime
}
