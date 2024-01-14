import queryParamsHandler from "../queryParamsHandler";

describe("queryParamsHandler function", () => {
  it("should generate correct query parameters", () => {
    const searchParams = {
      page: 1,
      sortBy: "name",
      model: "abc",
      brand: ["brand1", "brand2"],
      search: "keyword",
      orderBy: "asc",
    };

    const result = queryParamsHandler(searchParams);

    expect(result.toString()).toEqual(
      "search=keyword&page=1&sortBy=name&model=abc&brand=brand1&brand=brand2"
    );
  });
});
