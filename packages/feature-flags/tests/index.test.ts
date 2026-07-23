import { getFeatureFlagsInfo } from "../utils";

describe("@andhra-isp/feature-flags", () => {
  it("should return correct package name", () => {
    expect(getFeatureFlagsInfo()).toBe("feature-flags");
  });
});
