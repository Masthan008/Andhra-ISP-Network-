import { getStorageInfo } from "../utils";

describe("@andhra-isp/storage", () => {
  it("should return correct package name", () => {
    expect(getStorageInfo()).toBe("storage");
  });
});
