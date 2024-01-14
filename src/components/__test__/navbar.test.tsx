import { screen } from "@testing-library/react";
import { Navbar } from "../Navbar/Navbar";
import { CustomRender } from "@/lib/__test&Mocks__/test-util/CustomRender";
import userEvent from "@testing-library/user-event";
import { mockContextData } from "@/lib/__test&Mocks__/mocks/mockUseContext";

const mockPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
  usePathname: () => "/mocked-pathname",
}));

jest.mock("../../lib/hook/useContex.ts", () => ({
  useContexData: jest.fn(() => mockContextData),
}));

describe("Navbar Component", () => {
  it("renders without crashing", () => {
    CustomRender(<Navbar />);
  });

  it("updates search query on input change", async () => {
    CustomRender(<Navbar />);
    const searchInput = await screen.findAllByPlaceholderText("Search");
    await userEvent.type(searchInput[0], "test");
    expect(searchInput[0]).toHaveValue("test");
  });

  it("opens and closes the cart dropdown", async () => {
    CustomRender(<Navbar />);
    const cartButton = screen.getByTestId("cartid");

    await userEvent.click(cartButton);

    const cartHeader = await screen.findByRole("heading");
    const checkoutHeading = screen.getByText("Cart details");

    expect(cartHeader).toBeInTheDocument();
    expect(checkoutHeading).toBeInTheDocument();

    await userEvent.click(cartButton);
    expect(cartHeader).not.toBeInTheDocument();
    expect(checkoutHeading).not.toBeInTheDocument();
  });

  it("triggers checkoutHandler when the cart is not empty", async () => {
    CustomRender(<Navbar />);
    const cartButton = screen.getByTestId("cartid");
    await userEvent.click(cartButton);

    const count = screen.getByText("1");
    expect(count).toBeInTheDocument();

    const proceedToCheckout = screen.getByRole("button", {
      name: "Proceed To Checkout",
    });
    expect(proceedToCheckout).toBeInTheDocument();

    await userEvent.click(proceedToCheckout);
    expect(mockPush).toHaveBeenCalledWith("/checkout");
  });
});
