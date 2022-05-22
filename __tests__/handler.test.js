const handler = require("../handler");

test("correct greeting is generated", () => {
  expect(handler.printHelloWorld()).toBe("Hello from Lambda!");
});
