import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PageNumberForm from "./page-number-form.component";

test("submits valid page number input successfully", () => {
  const handleOnSubmit = jest.fn();
  const handleOnChange = jest.fn();
  const { getByLabelText } = render(
    <PageNumberForm
      handleOnSubmit={handleOnSubmit}
      handleOnChange={handleOnChange}
      currentPageNumber=""
    />
  );
  const pageNumberinput = getByLabelText("Seitenzahl");

  fireEvent.focus(pageNumberinput);
  fireEvent.change(pageNumberinput, { target: { value: "35" } });
  fireEvent.submit(pageNumberinput);
  expect(handleOnSubmit).toHaveBeenCalledTimes(1);
});
