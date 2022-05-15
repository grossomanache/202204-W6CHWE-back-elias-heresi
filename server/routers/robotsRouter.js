const express = require("express");
const {
  getRobots,
  getRobotById,
  addRobot,
} = require("../controllers/robotsController");

const robotsRouter = express.Router();
robotsRouter.get("/", getRobots);
robotsRouter.get("/:idRobot", getRobotById);
robotsRouter.post("/", addRobot);

module.exports = { robotsRouter };
