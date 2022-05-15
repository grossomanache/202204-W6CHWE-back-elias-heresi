require("dotenv").config();
const cors = require("cors");

const express = require("express");
const morgan = require("morgan");
const { notFoundError } = require("./middlewares/errors");
const { robotsRouter } = require("./routers/robotsRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/robots", robotsRouter);
app.use(notFoundError);

module.exports = { app };
