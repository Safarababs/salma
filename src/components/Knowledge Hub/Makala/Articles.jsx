// Articles.js

import React from "react";

function Articles({ articles }) {
  const handleCopy = (content) => {
    navigator.clipboard
      .writeText(content)
      .then(() => alert("Content copied to clipboard"))
      .catch((error) => console.error("Could not copy content: ", error));
  };

  return (
    <section className="articles">
      {articles.map((article, index) => (
        <article key={index} className="article">
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <button onClick={() => handleCopy(article.content)}>Copy Text</button>
        </article>
      ))}
    </section>
  );
}

export default Articles;
