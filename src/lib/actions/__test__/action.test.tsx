import { server } from "@/lib/__test&Mocks__/MockServer/MockServer";
import { callApi } from "../__api.actions";
import { rest } from "msw";

describe("callApi function for Produtcs", () => {
  it("should return data on successful GET request", async () => {
    const response = await callApi({
      method: "get",
      path: "/api/products",
    });

    expect(response.kind).toBe("ok");
    expect(response.data).toBeDefined();
  });

  it("should handle error on unsuccessful GET request", async () => {
    server.use(
      rest.get("/api/nonexistent-endpoint", (req, res, ctx) => {
        return res(ctx.status(404), ctx.json({ error: "Not Found" }));
      })
    );

    const response = await callApi({
      method: "get",
      path: "/api/nonexistent-endpoint",
    });

    expect(response.kind).toBe("error");
    expect(response.error).toBeDefined();
    expect(response.status).toBe(404);
  });
});

describe("callApi function for Categories", () => {
  it("should return data on successful GET request", async () => {
    const response = await callApi({
      method: "get",
      path: "/api/categories",
    });

    expect(response.kind).toBe("ok");
    expect(response.data).toBeDefined();
  });

  it("should handle error on unsuccessful GET request", async () => {
    server.use(
      rest.get("/api/nonexistent-endpoint", (req, res, ctx) => {
        return res(ctx.status(404), ctx.json({ error: "Not Found" }));
      })
    );

    const response = await callApi({
      method: "get",
      path: "/api/nonexistent-endpoint",
    });

    expect(response.kind).toBe("error");
    expect(response.error).toBeDefined();
    expect(response.status).toBe(404);
  });
});
