import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Modal } from "../Modal";

const mockOnClose = jest.fn();
const mockIsOpen = true;
const mockContent = "hello";

describe("Render Modal", () => {
  it("should Correct Render", () => {
    render(
      <Modal onClose={mockOnClose} isOpen={mockIsOpen}>
        {mockContent}
      </Modal>
    );

    expect(screen.getByText("hello")).toBeInTheDocument();
  });

  it("close modal when click button", async () => {
    render(
      <Modal onClose={mockOnClose} isOpen={mockIsOpen}>
        {mockContent}
      </Modal>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(mockOnClose).toHaveBeenCalled();
  });
});
