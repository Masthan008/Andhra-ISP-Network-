import { getTsConfigInfo } from "../utils";

describe("@andhra-isp/ts-config", () => {
  it("should return package info", () => {
    expect(getTsConfigInfo()).toBe("ts-config");
  });
});
