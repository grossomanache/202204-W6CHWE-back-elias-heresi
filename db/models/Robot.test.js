const mockRobots = require("../../server/mocks/mockRobots");
const Robot = require("./Robot");

describe("Given the Robot schema", () => {
  describe("When instantiated with the Larry the boy mock robot", () => {
    test("Then a robot with the same properties and values (name, speed, resistance and url) will be created", () => {
      const mockRobot = mockRobots[0];
      const createdMockRobot = new Robot(mockRobots[0]);

      const expectedName = mockRobot.name;
      const expectedSpeed = mockRobot.speed;
      const expectedResistance = mockRobot.resistance;
      const expectedUrl = mockRobot.url;

      expect(createdMockRobot.name).toBe(expectedName);
      expect(createdMockRobot.speed).toBe(expectedSpeed);
      expect(createdMockRobot.resistance).toBe(expectedResistance);
      expect(createdMockRobot.url).toBe(expectedUrl);
    });
  });
});
