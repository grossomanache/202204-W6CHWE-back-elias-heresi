require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug")("robots:root:server");
const { app } = require(".");

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.gray(`Server set up in port ${port}`));
  });
  server.on("error", (error) => {
    debug(chalk.red("Error on server"));
    if (error.code === "EADDRINUSE") {
      debug(chalk.blue(`Port ${port}`));
    }
  });
};

module.exports = { initializeServer };
