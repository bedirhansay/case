import BrandsAndModelsFilter from "@/components/Filter/BrandsAndModelsFilter";
import { CustomRender } from "@/lib/__test&Mocks__/test-util/CustomRender";
import { mockContextData } from "@/lib/__test&Mocks__/mocks/mockUseContext";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockSelectedItems = [""];
const mockFilterData = ["Lamborghini", "Smart", "Ferrari"];
const mockOnInputchange = jest.fn();
const mockOnItemChange = jest.fn();

const setup = () => {
  jest.mock("../../../lib/hook/useContex.ts", () => ({
    useContexData: mockContextData,
  }));

  CustomRender(
    <BrandsAndModelsFilter
      name="Brands"
      filterData={mockFilterData}
      selectedItems={mockSelectedItems}
      onInputChange={mockOnInputchange}
      onItemChange={mockOnItemChange}
    />
  );
};

beforeEach(() => {
  setup();
});

describe("Brands And Models Filter Component", () => {
  it("should render correctly", () => {});

  it("should render correct number of checkboxes", async () => {
    const checkboxes = await screen.findAllByRole("radio");
    expect(checkboxes).toHaveLength(mockFilterData.length);
  });

  it("should mark selected items correctly", async () => {
    const checkboxes = await screen.findAllByRole("radio");

    checkboxes.forEach((checkbox, index) => {
      const item = mockFilterData[index];
      expect(checkbox).toHaveAttribute("name", "Brands");
    });
  });

  it("should handle input changes", async () => {
    const searchInput = await screen.findByPlaceholderText("search");

    expect(searchInput).toBeInTheDocument();
    await userEvent.type(searchInput, "Ferrari");
    expect(searchInput).toHaveDisplayValue("Ferrari");

    expect(mockOnInputchange).toHaveBeenCalledWith("Ferrari");
  });

  it("should handle item changes on checkbox click", async () => {
    const checkboxes = await screen.findAllByRole("radio");

    checkboxes.forEach(async (checkbox, index) => {
      const item = mockFilterData[index];
      await userEvent.click(checkbox);
      expect(mockOnItemChange).toHaveBeenCalledWith(item);
    });
  });
});
