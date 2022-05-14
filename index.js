require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug")("robots:root:server");
const { initializeServer } = require("./server/initializeServer");
const { connectToDatabase } = require("./db");

const port = process.env.SERVER_PORT;
const databaseUrl = process.env.DATABASE_URL;

(async () => {
  try {
    await connectToDatabase(databaseUrl);
    initializeServer(port || 4000);
  } catch (error) {
    debug(chalk.red("Error in setup. Please retry"));
  }
})();
