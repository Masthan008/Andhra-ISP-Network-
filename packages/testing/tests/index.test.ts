import { getTestingInfo } from "../utils";

describe("@andhra-isp/testing", () => {
  it("should return package info", () => {
    expect(getTestingInfo()).toBe("testing");
  });
});
