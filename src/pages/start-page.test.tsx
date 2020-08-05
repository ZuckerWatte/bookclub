import React from "react";
import { render } from "@testing-library/react";
import StartPage from "./start-page.component";

test("renders start page headline", () => {
  const { getByText } = render(<StartPage />);
  const headline = getByText("Interessante Buchseiten");
  expect(headline).toBeInTheDocument();
});

test("renders start page headline", () => {
  const { getByLabelText } = render(<StartPage />);
  const pageNumberinput = getByLabelText("Seitenzahl");
  expect(pageNumberinput).toBeInTheDocument();
});
