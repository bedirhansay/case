import { CustomRender } from "@/lib/__test&Mocks__/test-util/CustomRender";
import { ProductCard } from "../ui/ProductCard";
import { mockContextData } from "@/lib/__test&Mocks__/mocks/mockUseContext";
import { screen } from "@testing-library/react";
import { ProductListPage } from "../ProductList/ProductList";

jest.mock("../../lib/hook/useContex.ts", () => ({
  useContexData: jest.fn(() => mockContextData),
}));

describe("Render ProductList Card", () => {
  it("renders without crashing", () => {
    CustomRender(<ProductListPage />);
  });

  it("Should product div in dom", () => {
    CustomRender(<ProductListPage />);
    const div = screen.getByTestId("product-list");
    expect(div).toBeInTheDocument();
  });
});
