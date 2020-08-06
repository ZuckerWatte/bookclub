import React, { useState, FormEvent } from "react";
import "./start-page.styles.scss";
import PageNumberList from "../components/page-number-list/page-number-list.component";
import PageNumberForm from "../components/page-number-form/page-number-form.component";

const StartPage = () => {
  const pageNumberList: number[] = [];
  const [currentPageNumber, setCurrentPageNumber] = useState("");
  const [pageNumbers, setPageNumbers] = useState(pageNumberList);

  const handleOnChange = (event: FormEvent): void => {
    setCurrentPageNumber((event.target as HTMLInputElement).value);
  };

  const handleOnSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const updatedPageNumbers: number[] = pageNumbers.map((number) => number);
    updatedPageNumbers.push(Number(currentPageNumber));
    setPageNumbers(updatedPageNumbers.map((number) => number));
    setCurrentPageNumber("");
  };

  return (
    <div className="start-page">
      <h1>Interessante Buchseiten</h1>
      <PageNumberList pageNumbers={pageNumbers} />
      <PageNumberForm
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        currentPageNumber={currentPageNumber}
      />
    </div>
  );
};

export default StartPage;
