const express = require("express");
const { getRobots, getRobotById } = require("../controllers/robotsController");

const robotsRouter = express.Router();
robotsRouter.get("/", getRobots);
robotsRouter.get("/:idRobot", getRobotById);

module.exports = { robotsRouter };
