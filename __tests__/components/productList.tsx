import { ProductListPage } from "@/components/ProductList/ProductList";
import { ContextProvider } from "@/lib/context/ContextProvider";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockProducts = [
  {
    createdAt: "2023-07-17T07:21:02.529Z",
    name: "Bentley Focus",
    image: "https://loremflickr.com/640/480/food",
    price: "51.00",
    description: "Quasi adipisci sint veniam delectus ",
    model: "CTS",
    brand: "Lamborghini",
    id: 1,
  },
  {
    createdAt: "2023-07-17T02:49:46.692Z",
    name: "Aston Martin Durango",
    image: "https://loremflickr.com/640/480/food",
    price: "374.00",
    description: "Odio et voluptates ",
    model: "Roadster",
    brand: "Smart",
    id: 2,
  },
];

describe("ProductListPage component", () => {
  it("renders product cards correctly", () => {
    render(
      <ContextProvider>
        <ProductListPage products={mockProducts} />
      </ContextProvider>
    );

    mockProducts.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`${product.price} ₺`)).toBeInTheDocument();
    });
  });
});
