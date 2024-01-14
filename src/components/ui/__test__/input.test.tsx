import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "../Input";
import "@testing-library/jest-dom";

describe("Input Component", () => {
  it("renders input element with provided attributes", () => {
    render(<Input type="text" placeholder="Enter your text" />);

    const inputElement = screen.getByPlaceholderText("Enter your text");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });

  it("merges additional classes with default classes", () => {
    render(<Input type="text" className="custom-class" />);

    const inputElement = screen.getByRole("textbox");

    expect(inputElement).toHaveClass("custom-class");
  });
});
