import { Pagination } from "@/components/Pagination/Pagination";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Pagination component", () => {
  it("renders pagination buttons correctly", () => {
    const currentPage = 1;
    const totalPage = 5;
    render(<Pagination currentPage={currentPage} totalPage={totalPage} />);

    const firstPageButton = screen.getAllByText(currentPage.toString());

    for (let i = 1; i <= totalPage; i++) {
      const pageButton = screen.getByText(i.toString());
      expect(pageButton).toBeInTheDocument();
      if (i === currentPage) {
        expect(pageButton).toHaveClass(
          "bg-gray-900 text-white rounded-md px-4 py-2"
        );
      } else {
        expect(pageButton).toHaveClass("text-black");
      }
    }

    const lastPageButton = screen.getByText(totalPage.toString());
    expect(lastPageButton).toBeInTheDocument();
    expect(firstPageButton[0]).toBeInTheDocument();
  });
});
