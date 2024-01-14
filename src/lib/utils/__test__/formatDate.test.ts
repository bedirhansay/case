import { FormatDate } from "@/lib/utils/format.date";

describe("FormatDate function", () => {
  it("should format a date correctly in Turkish", () => {
    const date = "2023-01-15T12:30:00Z";
    const formattedDate = FormatDate(date);
    expect(formattedDate).toBe("15 Ocak 2023");

    const currentDate = new Date("2023-01-15T12:30:00Z");
    const formattedDateObject = FormatDate(currentDate);
    expect(formattedDateObject).toBe("15 Ocak 2023");

    const formattedUndefinedDate = FormatDate(undefined);
    expect(formattedUndefinedDate).toBe("");
  });
});
