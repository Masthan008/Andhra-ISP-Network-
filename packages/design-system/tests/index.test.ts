import { getDesignSystemInfo } from "../utils";

describe("@andhra-isp/design-system", () => {
  it("should return package info", () => {
    expect(getDesignSystemInfo()).toBe("design-system");
  });
});
