import { getIconsInfo } from "../utils";

describe("@andhra-isp/icons", () => {
  it("should return package info", () => {
    expect(getIconsInfo()).toBe("icons");
  });
});
