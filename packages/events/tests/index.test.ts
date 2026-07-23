import { getEventsInfo } from "../utils";

describe("@andhra-isp/events", () => {
  it("should return correct package name", () => {
    expect(getEventsInfo()).toBe("events");
  });
});
