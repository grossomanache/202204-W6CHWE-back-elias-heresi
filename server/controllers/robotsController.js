const chalk = require("chalk");
const debug = require("debug")("robots:root:server:controllers");
const Robot = require("../../db/models/Robot");

const getRobots = async (req, res) => {
  const robots = await Robot.find();
  res.status(200).json(robots);
};

const getRobotById = async (req, res) => {
  const {
    params: { idRobot },
  } = req;
  const robot = await Robot.findById(idRobot);
  res.status(200).json(robot);
};

const addRobot = async (req, res) => {
  const robot = req.body;
  debug(chalk.green("A new robot has been created"));
  const createdMessage = { msg: "A new robot has been created successfully!" };
  await Robot.create(robot);
  res.status(201).json(createdMessage);
};

module.exports = { getRobots, getRobotById, addRobot };
