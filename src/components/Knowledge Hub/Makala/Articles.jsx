import React from "react";

function Articles({ articles }) {
  const copyContent = (content) => {
    navigator.clipboard
      .writeText(content)
      .then(() => alert("Content copied to clipboard"))
      .catch((error) => console.error("Could not copy content: ", error));
  };

  return (
    <section style={{ paddingTop: "5rem" }}>
      <div>
        <h2>Makala Jaat section will be updated and beautify soon</h2>
        {articles.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <button onClick={() => copyContent(article.content)}>
              Copy Text
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
