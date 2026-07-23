import { getTailwindConfigInfo } from "../utils";

describe("@andhra-isp/tailwind-config", () => {
  it("should return package info", () => {
    expect(getTailwindConfigInfo()).toBe("tailwind-config");
  });
});
