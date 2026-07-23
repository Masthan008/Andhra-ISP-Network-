import { getMapsInfo } from "../utils";

describe("@andhra-isp/maps", () => {
  it("should return package info", () => {
    expect(getMapsInfo()).toBe("maps");
  });
});
