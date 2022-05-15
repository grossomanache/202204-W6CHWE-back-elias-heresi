const express = require("express");
const { getRobots, getRobotById } = require("../controllers/robotsController");
const { notFoundError } = require("../middlewares/errors");

const robotsRouter = express.Router();
robotsRouter.get("/", getRobots);
robotsRouter.get("/:idRobot", getRobotById);
robotsRouter.get(notFoundError);

module.exports = { robotsRouter };
