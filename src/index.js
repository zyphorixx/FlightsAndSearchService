const express = require("express");
require("dotenv").config(); // must be at the top

const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async () => {
  const app = express();

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

setupAndStartServer();
