const chalk = require("chalk");
require("dotenv").config();
const debug = require("debug")("robots:root:server:middlewares:errors");

const notFoundError = (req, res) => {
  debug(chalk.red("Endpoint not found. Please re-enter your request"));
  const response = { msg: "Error in request. Endpoint not found" };
  res.status(404).json(response);
};

module.exports = { notFoundError };
