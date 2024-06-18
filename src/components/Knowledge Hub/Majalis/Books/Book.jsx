import React from "react";

const Book = ({ title, coverImage, downloadLink }) => {
  return (
    <div className="book">
      <img src={coverImage} alt={title} />
      <div className="book-info">
        <h3>{title}</h3>
        <a href={downloadLink} className="download-button" download>
          Download
        </a>
      </div>
    </div>
  );
};

export default Book;
