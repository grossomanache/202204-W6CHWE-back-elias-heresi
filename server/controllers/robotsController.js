const mockRobots = [
  { id: 1, name: "Bender" },
  { id: 2, name: "Terminator" },
];

const getRobots = (req, res) => {
  res.status(200).json(mockRobots);
};

const getRobotById = (req, res) => {
  const idRobot = +req.params.idRobot;
  const arrayOfThings = mockRobots;
  const response = arrayOfThings.find((robot) => robot.id === idRobot);
  res.status(200).json(response);
};

module.exports = { getRobots, getRobotById };
