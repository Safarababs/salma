import React from "react";
import Book from "./Book";

// import Cover
import lahoof from "./books cover/lahoof.png";
import Mutahar from "./books cover/Mutahar.png";
import MadinasyMadinaTk from "./books cover/madina sy madina.png";
import MaqtalAlHussain from "./books cover/maqtalalhussain.png";

// import books
import Lahoofpdf from "./maqtal books/lahoof.pdf";
import mutaharpdf from "./maqtal books/mutahar.pdf";
import madinasymadinapdf from "./maqtal books/madina sy madina.pdf";
import MaqtalHussainpdf from "./maqtal books/Maqtal-ul-Hussain.pdf";

const BookList = () => {
  // Example data for books
  const books = [
    {
      id: 1,
      title: "مقتل مطاہر",
      coverImage: Mutahar,
      downloadLink: mutaharpdf,
    },
    {
      id: 2,
      title: "مدینہ سے مدینہ تک",
      coverImage: MadinasyMadinaTk,
      downloadLink: madinasymadinapdf,
    },
    {
      id: 3,
      title: "مقتل الحسین",
      coverImage: MaqtalAlHussain,
      downloadLink: MaqtalHussainpdf,
    },
    {
      id: 4,
      title: "مقتل لہوف",
      coverImage: lahoof,
      downloadLink: Lahoofpdf,
    },
  ];

  return (
    <div className="book-list">
      <h1>Books Corner</h1>
      <div className="books-grid">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            coverImage={book.coverImage}
            downloadLink={book.downloadLink}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
