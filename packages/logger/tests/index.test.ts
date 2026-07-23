import { getLoggerInfo } from "../utils";

describe("@andhra-isp/logger", () => {
  it("should return package info", () => {
    expect(getLoggerInfo()).toBe("logger");
  });
});
