import React from "react";
import ArticlesData from "./Articles";

function ArticlesPage() {
  const copyContent = (content) => {
    navigator.clipboard
      .writeText(content)
      .then(() => alert("Content copied to clipboard"))
      .catch((error) => console.error("Could not copy content: ", error));
  };

  return (
    <div className="articles-page">
      <header>
        <h1>Welcome to My Articles</h1>
      </header>
      <main>
        {ArticlesData.map((article, index) => (
          <article key={index} className="article">
            <h2>{article.title}</h2>
            <div className="article-content">
              {article.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <button onClick={() => copyContent(article.content)}>
              Copy Text
            </button>
          </article>
        ))}
      </main>
    </div>
  );
}

export default ArticlesPage;
