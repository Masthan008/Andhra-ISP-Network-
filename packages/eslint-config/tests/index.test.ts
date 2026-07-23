import { getEslintConfigInfo } from "../utils";

describe("@andhra-isp/eslint-config", () => {
  it("should return package info", () => {
    expect(getEslintConfigInfo()).toBe("eslint-config");
  });
});
