const express = require("express");
const dotenv = require("dotenv").config();
const connectdb = require("./db.config");
const mainRoutes = require("./src/startup/route");
const startup = require("./src/startup/prod");

const app = express();
connectdb();
mainRoutes(app);
startup(app);

// const winston = require("winston");
// const winstondb = require("winston-mongodb");
// process.on("uncaughtException");
// winston.add(winston.transports.File, { filename: "logfile.log" });
// winston.add(winston.transports.MongoDB, {
//   db: "mongodb://localhost/test",
//   level: "info",
// });

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
