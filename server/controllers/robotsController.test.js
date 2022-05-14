const { getRobots, getRobotById } = require("./robotsController");

jest.mock("../../db/models/Robot", () => ({
  ...jest.requireActual("../../db/models/Robot"),
  find: jest.fn().mockResolvedValue("Found result"),
  findById: jest.fn().mockResolvedValue("Found result"),
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
