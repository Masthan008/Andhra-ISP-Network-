import { getObservabilityInfo } from "../utils";

describe("@andhra-isp/observability", () => {
  it("should return correct package name", () => {
    expect(getObservabilityInfo()).toBe("observability");
  });
});
