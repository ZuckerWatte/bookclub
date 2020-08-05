import React, { useState, FormEvent } from "react";
import TextField from "@material-ui/core/TextField";

interface Props {
  handleOnSubmit: (event: FormEvent) => void;
  handleOnChange: (event: FormEvent) => void;
  currentPageNumber: string;
}

const PageNumberForm = ({
  handleOnSubmit,
  handleOnChange,
  currentPageNumber,
}: Props) => {
  return (
    <form className="page-number-form" onSubmit={handleOnSubmit}>
      <TextField
        id="page-number-input"
        label="Seitenzahl"
        onChange={handleOnChange}
        value={currentPageNumber}
        helperText="Hier kannst du eine neue Seite aus dem Buch hinzufügen, die du gerne im Buchklub besprechen würdest."
      />
    </form>
  );
};

export default PageNumberForm;
