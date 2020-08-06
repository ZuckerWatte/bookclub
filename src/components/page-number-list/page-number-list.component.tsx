import React from "react";

interface Props {
  pageNumbers: number[];
}

const PageNumberList = ({ pageNumbers }: Props) => {
  return (
    <div className="page-number-list">
      <h2>Seiten, die ich mir merken möchte:</h2>
      {pageNumbers.map((page) => (
        <p key={page}>{page}</p>
      ))}
    </div>
  );
};

export default PageNumberList;
