import { getValidatorsInfo } from "../utils";

describe("@andhra-isp/validators", () => {
  it("should return correct package name", () => {
    expect(getValidatorsInfo()).toBe("validators");
  });
});
