import React from "react";
import BookList from "./Books/BookList";

const Majalis = () => {
  return (
    <section style={{ paddingTop: "5rem" }}>
      <div className="container-fluid home py-5">
        <div className="container py-5">
          <BookList />
        </div>
      </div>
    </section>
  );
};

export default Majalis;
