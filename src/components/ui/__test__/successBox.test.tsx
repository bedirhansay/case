import React from "react";
import { render, screen, act } from "@testing-library/react";
import { SuccesBox } from "../successBox";
import "@testing-library/jest-dom";
import { CustomRender } from "@/lib/__test&Mocks__/test-util/CustomRender";
jest.mock(
  "next/link",
  () =>
    ({ children }: { children: React.ReactNode }) =>
      children
);

describe("Success Box Component", () => {
  beforeAll(() => {
    window.open = jest.fn();
  });

  test("renders success box with 'Checkout completed successfully' message", async () => {
    CustomRender(<SuccesBox />);

    expect(screen.getByText("Process is completing...")).toBeInTheDocument();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    });
    expect(
      screen.getByText("Checkout completed successfully")
    ).toBeInTheDocument();
  });
});
