import React, { useState } from "react";
import Articles from "./Articles";
import ArticleForm from "./ArticleForm";

function ReadArticles() {
  const [articles, setArticles] = useState([]);

  const handleSubmit = (article) => {
    setArticles([...articles, article]);
  };

  return (
    <div>
      <ArticleForm onSubmit={handleSubmit} />
      <Articles articles={articles} />
    </div>
  );
}

export default ReadArticles;
