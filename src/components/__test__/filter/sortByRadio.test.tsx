import SortByRadio from "@/components/Filter/SortByRadio";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const mockSelectedSort = { sortBy: "createdAt", order: "asc" };
const mockSortChange = jest.fn();

describe("Sort By Radio Component", () => {
  it("should render correctly", () => {
    render(
      <SortByRadio
        selectedSort={mockSelectedSort}
        onSortChange={mockSortChange}
      />
    );
  });

  it("should render title and input", async () => {
    render(
      <SortByRadio
        selectedSort={mockSelectedSort}
        onSortChange={mockSortChange}
      />
    );

    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    const checkbox = await screen.findAllByRole("radio");
    expect(checkbox).toHaveLength(4);
  });

  it("handles brand filtering correctly", async () => {
    render(
      <SortByRadio
        selectedSort={mockSelectedSort}
        onSortChange={mockSortChange}
      />
    );

    const newToOldInput = await screen.findByLabelText("New to old");
    expect(newToOldInput).toHaveAttribute("id", "createdAt");
    await userEvent.click(newToOldInput);
    expect(newToOldInput).toBeChecked();

    const priceLowToHighInput = await screen.findByLabelText(
      "Price low to high"
    );
    await userEvent.click(priceLowToHighInput);
    expect(mockSortChange).toHaveBeenCalled();
  });
});
