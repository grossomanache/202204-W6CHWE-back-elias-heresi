const express = require("express");
const { getUsers } = require("../controllers/robotsController");

const usersRouter = express.Router();

usersRouter.post("/login", getUsers);

module.exports = { usersRouter };
