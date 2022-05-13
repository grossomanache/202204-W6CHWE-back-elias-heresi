const debug = require("debug")("robots:db");
const chalk = require("chalk");
const mongoose = require("mongoose");

const connectToDatabase = (connectionUrl) =>
  new Promise((resolve, reject) => {
    mongoose.connect(connectionUrl, (error) => {
      if (error) {
        debug(chalk.red("Error connecting to database"));
        reject();
        return;
      }
      debug(chalk.green("Succesfully connected to database"));
      resolve();
    });
  });
module.exports = { connectToDatabase };
