import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { ProductCard } from "../ProductCard";
import { CustomRender } from "@/lib/__test&Mocks__/test-util/CustomRender";
import MOCK_PRODUCTS from "@/lib/__test&Mocks__/constant/MockProducts";

const mockFavHandler = jest.fn();
const mockHandler = jest.fn();
const mockIsFavorite = jest.fn();

describe("Product Card", () => {
  it("renders correctly", async () => {
    for (const item of MOCK_PRODUCTS) {
      CustomRender(<ProductCard {...item} />);
    }

    const buttons = await screen.findAllByTestId("product-card");
    expect(buttons).toHaveLength(MOCK_PRODUCTS.length);
  });

  it("should call favHandler", async () => {
    for (const item of MOCK_PRODUCTS) {
      CustomRender(<ProductCard {...item} />);
    }
    const favButtons = await screen.findAllByTestId("fav-button");
    await userEvent.click(favButtons[0]);
  });
});
