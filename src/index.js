const express = require("express");
require("dotenv").config();

const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const db = require('./models/index');
const bodyParser = require("body-parser");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended : true}));
  
// Agar request "/api" se start hoti hai,
// toh hum sirf API related routes ko handle karte hain.
// Uske baad agar "/v1" aata hai, toh v1ApiRoutes ko forward kar dete hain.
// Aur agar "/city" aata hai, toh city related routes ko handle kiya jaata hai.

  app.use('/api', ApiRoutes);  // Handles both cities & airports
  
  app.listen(PORT, async () => {
    console.log(`Server started on port ${PORT}`);

    if(process.env.SYNC_DB){
      await db.sequelize.sync({alter : true});
      console.log("✅ DB Synced Successfully!");
    }
  });
};

setupAndStartServer();


