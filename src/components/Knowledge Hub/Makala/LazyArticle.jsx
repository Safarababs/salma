// LazyArticle.jsx
import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import ArticlesData from "./Articles";
import { Link } from "react-router-dom";

const LazyArticle = ({ className, ...props }) => {
  const [firstArticle, setFirstArticle] = useState(null);

  useEffect(() => {
    // Load the first article when component mounts
    setFirstArticle(ArticlesData[0]); // Assuming ArticlesData is an array of article objects
  }, []);

  const renderContent = () => {
    if (!firstArticle) return null;

    const { title, content } = firstArticle;

    // Truncate content to first 100 characters
    const truncatedContent = content.substring(0, 400);
    const remainingContent = content.substring(400);

    return (
      <div className={`article-item ${className}`}>
        <h2>{title}</h2>
        <p>{truncatedContent}</p>
        {remainingContent.length > 0 && (
          <Link to="/kidsarticles" className="btn btn-primary">
            Read Full Article
          </Link>
        )}
      </div>
    );
  };

  return (
    <LazyLoad height={200} offset={100} once>
      {renderContent()}
    </LazyLoad>
  );
};

export default LazyArticle;
