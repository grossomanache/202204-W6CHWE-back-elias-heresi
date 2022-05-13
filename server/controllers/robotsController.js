const { Robot } = require("../../db/models/Robot");

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

module.exports = { getRobots, getRobotById };
