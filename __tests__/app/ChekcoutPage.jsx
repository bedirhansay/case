import { ContextProvider, StoreContext } from "@/lib/context/ContextProvider";

import { render, screen } from "@testing-library/react";
import { CheckoutPage } from "@/container/CheckoutPage/CheckoutPage";

describe("CheckoutPage component", () => {
  it("renders CheckoutPage component with context data", () => {
    render(
      <ContextProvider>
        <CheckoutPage />
      </ContextProvider>
    );

    it("should")
  });
});
