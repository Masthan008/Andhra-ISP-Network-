import { getFormsInfo } from "../utils";

describe("@andhra-isp/forms", () => {
  it("should return package info", () => {
    expect(getFormsInfo()).toBe("forms");
  });
});
