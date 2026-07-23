import { getHttpInfo } from "../utils";

describe("@andhra-isp/http", () => {
  it("should return correct package name", () => {
    expect(getHttpInfo()).toBe("http");
  });
});
