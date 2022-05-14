const { getRobots } = require("./robotsController");
const { mockRobots } = require("../mocks/mockRobots");

jest.mock("../../db/models/Robot", () => ({
  ...jest.requireActual("../../db/models/Robot"),
  find: jest.fn().mockResolvedValue(mockRobots),
}));

describe("Given the getRobots function", () => {
  describe("When invoked with a response", () => {
    test("Then it should call the response's status with a 200", () => {
      const expectedStatus = 200;
      const res = { status: jest.fn().mockReturnThis() };

      getRobots(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });
  });
});
