import { Truncate } from "../truncate";

describe("Truncate Functions", () => {
  it("Should generate correct length of string", () => {
    const sentence = "a man holding key of world";

    const result = Truncate(sentence, 10);

    expect(result).toEqual("a man hold...");
  });
});
