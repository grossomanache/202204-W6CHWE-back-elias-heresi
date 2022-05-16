const { notFoundError, generalError } = require("./errors");

describe("Given the notFoundError function", () => {
  describe("When invoked with a response", () => {
    test("Then it should call the response's status with a 404 and a json with 'Error in request. Endpoint not found'", () => {
      const expectedStatus = 404;
      const mockedResponse = { msg: "Error in request. Endpoint not found" };
      const res = {
        json: jest.fn().mockReturnValue(mockedResponse),
        status: jest.fn().mockReturnThis(),
      };

      notFoundError(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith(mockedResponse);
    });
  });
});

describe("Given the generalError function", () => {
  describe("When invoked with a response", () => {
    test("The it should call the response's status with a 500 and a json with Error in request", () => {
      const expectedStatus = 500;
      const mockedResponse = { msg: "Error in request." };
      const res = {
        json: jest.fn().mockReturnValue(mockedResponse),
        status: jest.fn().mockReturnThis(),
      };

      const inputtedError = { msg: "Error in test" };
      generalError(inputtedError, null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith(mockedResponse);
    });
  });
});
