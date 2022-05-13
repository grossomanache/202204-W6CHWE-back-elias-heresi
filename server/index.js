require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const { robotsRouter } = require("./routers/robotsRouter");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/robots", robotsRouter);

module.exports = { app };
