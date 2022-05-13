require("dotenv").config();
const { initializeServer } = require("./server/initializeServer");

const port = process.env.SERVER_PORT;

initializeServer(port);
