import { getAnimationsInfo } from "../utils";

describe("@andhra-isp/animations", () => {
  it("should return package info", () => {
    expect(getAnimationsInfo()).toBe("animations");
  });
});
