const mockRobots = [
  {
    id: 1,
    name: "Larry the Boy",
    speed: 7,
    resistance: 6,
    url: "test-url.com",
  },
  {
    id: 2,
    name: "Cameron Audio",
    speed: 7,
    resistance: 6,
    url: "test-url.com",
  },
];

const mockedNewRobot = {
  name: "New created robot",
  speed: 10,
  resistance: 10,
  url: "https://www.cinemascomics.com/wp-content/uploads/2017/07/nueva-trilogia-terminator.jpg",
  creation: "10/05/2020",
  description: "Robot created to test.",
};

module.exports = { mockRobots, mockedNewRobot };
