import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PageNumberForm from "./page-number-form.component";

test("submits valid page number input on enter key", () => {
  const handleOnSubmit = jest.fn();
  const handleOnChange = jest.fn();
  const { getByLabelText } = render(
    <PageNumberForm
      handleOnSubmit={handleOnSubmit}
      handleOnChange={handleOnChange}
      currentPageNumber=""
    />
  );
  const pageNumberInput = getByLabelText("Seitenzahl");

  fireEvent.focus(pageNumberInput);
  fireEvent.change(pageNumberInput, { target: { value: "35" } });
  fireEvent.submit(pageNumberInput);
  expect(handleOnSubmit).toHaveBeenCalledTimes(1);
});

test("submits valid page number input on button click", () => {
  const handleOnSubmit = jest.fn();
  const handleOnChange = jest.fn();
  const { getByLabelText } = render(
    <PageNumberForm
      handleOnSubmit={handleOnSubmit}
      handleOnChange={handleOnChange}
      currentPageNumber=""
    />
  );
  const pageNumberButton = getByLabelText("hinzufügen");

  fireEvent.click(pageNumberButton);
  expect(handleOnSubmit).toHaveBeenCalledTimes(1);
});
