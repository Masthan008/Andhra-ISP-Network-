import { getSecurityInfo } from "../utils";

describe("@andhra-isp/security", () => {
  it("should return correct package name", () => {
    expect(getSecurityInfo()).toBe("security");
  });
});
