import { getCacheInfo } from "../utils";

describe("@andhra-isp/cache", () => {
  it("should return correct package name", () => {
    expect(getCacheInfo()).toBe("cache");
  });
});
