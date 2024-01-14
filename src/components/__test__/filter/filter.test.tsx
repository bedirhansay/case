import React from "react";
import { render, screen } from "@testing-library/react";
import { Filter } from "../../Filter/Filter";
import { CustomRender } from "@/lib/__test&Mocks__/test-util/CustomRender";
import { mockContextData } from "@/lib/__test&Mocks__/mocks/mockUseContext";
import { DiProvider, injectable } from "react-magnetic-di";
import SortByRadio from "../../Filter/SortByRadio";
import BrandsAndModelsFilter from "../../Filter/BrandsAndModelsFilter";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

// ! Mock Func
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn() }),
  usePathname: () => "/?sortBy=price&orderBy=desc",
  useSearchParams: () => ({
    get: jest.fn(),
    getAll: jest.fn(),
  }),
}));

jest.mock("../../../lib/hook/useContex.ts", () => ({
  useContexData: jest.fn(() => mockContextData),
}));

// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState: ["", jest.fn()],
// }));

jest.mock("../../../lib/hook/useSize.ts", () => ({
  useSize: jest.fn(() => [640, 1280]),
}));

const SortByRadioDi = injectable(SortByRadio, () => <div />);
const BrandsAndModelsDi = injectable(BrandsAndModelsFilter, () => <div />);

describe("Filter Component", () => {
  it("renders correctly", () => {
    CustomRender(<Filter />);
  });

  it("Should render mobile filter w < 768 pixel", async () => {
    jest.mock("../../../lib/hook/useSize.ts", async () => ({
      useSize: jest.fn(() => [765, 1280]),
    }));
    render(<Filter />, {
      wrapper: (p: any) => (
        <DiProvider use={[SortByRadioDi, BrandsAndModelsDi]} {...p} />
      ),
    });
    const mobileScreenButton = screen.getByRole("button");
    expect(mobileScreenButton).toBeInTheDocument();

    const heading = screen.getAllByRole("heading");
    expect(heading[0]).toHaveTextContent("Filters");
  });

  it("Should render web filter w > 768 pixel", async () => {
    jest.mock("../../../lib/hook/useSize.ts", async () => ({
      useSize: jest.fn(() => [1380, 1280]),
    }));
    render(<Filter />, {
      wrapper: (p: any) => (
        <DiProvider use={[SortByRadioDi, BrandsAndModelsDi]} {...p} />
      ),
    });
    const mobileScreenButton = screen.getByRole("button");
    expect(mobileScreenButton).toBeInTheDocument();

    const heading = screen.getAllByRole("heading");
    expect(heading[0]).toHaveTextContent("Filters");
  });

  it("toggles filter area visibility on button click", async () => {
    CustomRender(<Filter />);

    const filterAreaElement = screen.getByTestId("filter-area");
    expect(filterAreaElement).toHaveAttribute("data-open", "false");

    const mobileScreenButton = screen.getByRole("button");
    expect(mobileScreenButton).toBeInTheDocument();

    await userEvent.click(mobileScreenButton);

    expect(filterAreaElement).toHaveAttribute("data-open", "true");
  });
});
