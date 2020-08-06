import React, { FormEvent } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import "./page-number-form.styles.scss";

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
        className="page-number-input"
        id="page-number-input"
        label="Seitenzahl"
        onChange={handleOnChange}
        value={currentPageNumber}
        helperText="Hier kannst du eine neue Seite aus dem Buch hinzufügen, die du gerne im Buchklub besprechen würdest."
      />
      <IconButton
        aria-label="hinzufügen"
        className="page-number-button"
        color="primary"
        onClick={handleOnSubmit}
      >
        <PlaylistAdd />
      </IconButton>
    </form>
  );
};

export default PageNumberForm;
