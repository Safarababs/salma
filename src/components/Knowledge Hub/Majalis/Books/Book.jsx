import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Book = ({ title, coverImage, downloadLink }) => {
  return (
    <div className="book">
      <LazyLoadImage alt={title} src={coverImage} />

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
