const { mockedNewRobot } = require("../mocks/mockRobots");
const { getRobots, getRobotById, addRobot } = require("./robotsController");

jest.mock("../../db/models/Robot", () => ({
  ...jest.requireActual("../../db/models/Robot"),
  find: jest.fn().mockResolvedValue("Found result"),
  findById: jest.fn().mockResolvedValue("Found result"),
  create: jest
    .fn()
    .mockResolvedValue({ msg: "A new robot has been created successfully!" }),
}));

describe("Given the getRobots controller function", () => {
  describe("When invoked with a response", () => {
    test("Then it should call the response's status with a 200 and a json with 'Found result'", async () => {
      const expectedStatus = 200;
      const foundResult = "Found result";
      const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };

      await getRobots(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith(foundResult);
    });
  });
});

describe("Given the getRobotById controller function", () => {
  describe("When invoked with a response", () => {
    test("Then it should call the response's status with a 200 and a json with 'Found result'", async () => {
      const expectedStatus = 200;
      const foundResult = "Found result";
      const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };
      const req = { params: { idRobot: 2 } };

      await getRobotById(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith(foundResult);
    });
  });
});

describe("Given the addRobot function", () => {
  describe("When invoked with a response which contains an object of a robot", () => {
    test("Then it should call the response's status 201 and a json with the msg: 'A new robot has been created successfully'", async () => {
      const expectedStatus = 201;
      const expectedResult = {
        msg: "A new robot has been created successfully!",
      };
      const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };
      const req = { body: mockedNewRobot };

      await addRobot(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith(expectedResult);
    });
  });
});
