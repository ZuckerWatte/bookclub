import React from "react";
import { render, screen } from "@testing-library/react";
import PageNumberList from "./page-number-list.component";

test("displays page numbers correctly", () => {
  const pages = [22, 33, 44];
  render(<PageNumberList pageNumbers={pages} />);

  pages.forEach((page) => {
    expect(screen.getByText(page.toString())).toBeInTheDocument;
  });
});
