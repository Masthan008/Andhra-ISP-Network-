import { getAuthInfo } from "../utils";

describe("@andhra-isp/auth", () => {
  it("should return package info", () => {
    expect(getAuthInfo()).toBe("auth");
  });
});
