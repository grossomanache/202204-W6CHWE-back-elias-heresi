const { notFoundError, fetchingError } = require("./errors");

describe("Given the notFoundError function", () => {
  describe("When invoked with a response", () => {
    test("Then it should call the response's status with a 404 and a json with 'Error in request. Endpoint not found'", async () => {
      const expectedStatus = 404;
      const mockedResponse = { msg: "Error in request. Endpoint not found" };
      const res = {
        json: jest.fn().mockReturnValue(mockedResponse),
        status: jest.fn().mockReturnThis(),
      };

      await notFoundError(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith(mockedResponse);
    });
  });
});
