require("dotenv").config();
const cors = require("cors");

const express = require("express");
const morgan = require("morgan");
const auth = require("./auth/auth");
const { notFoundError, generalError } = require("./middlewares/errors");
const { robotsRouter } = require("./routers/robotsRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/robots", auth, robotsRouter);
app.use(notFoundError);
app.use(generalError);

module.exports = { app };
