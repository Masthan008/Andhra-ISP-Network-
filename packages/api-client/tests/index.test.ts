import { getApiClientInfo } from "../utils";

describe("@andhra-isp/api-client", () => {
  it("should return package info", () => {
    expect(getApiClientInfo()).toBe("api-client");
  });
});
