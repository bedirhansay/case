import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../Button";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  it("renders button with default variant and size", () => {
    render(
      <Button variant="default" size="default">
        Click me
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "flex items-center justify-center cursor-pointer rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 gradient text-primary-foreground hover:bg-primary/90"
    );
  });

  it("renders button with custom variant and size", () => {
    render(
      <Button variant="save" size="lg">
        Save
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    expect(button).toHaveClass(
      "flex items-center justify-center cursor-pointer text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-500 hover:bg-green-600 py-3 text-yellow-100 border-b-4 border-green-700 hover:border-green-700 transition duration-300 h-11 rounded-md px-8"
    );
  });
});
