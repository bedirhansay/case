import { ContextProvider } from "@/lib/context/ContextProvider";
import { render, screen } from "@testing-library/react";
import { CheckoutPage } from "@/container/CheckoutPage/CheckoutPage";
import "@testing-library/jest-dom";

describe("CheckoutPage component", () => {
  it("renders CheckoutPage component with context data", () => {
    render(
      <ContextProvider>
        <CheckoutPage />
      </ContextProvider>
    );

    const checkoutHeader = screen.getByRole("heading", { name: /Checkout/i });

    expect(checkoutHeader).toBeInTheDocument();
  });
});
