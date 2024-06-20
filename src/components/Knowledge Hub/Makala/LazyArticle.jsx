// src/components/LazyArticle.jsx
import React from "react";
import LazyLoad from "react-lazyload";

const LazyArticle = ({ title, content, className, ...props }) => (
  <LazyLoad height={200} offset={100} once>
    <div className={`lazy-article ${className}`}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </LazyLoad>
);

export default LazyArticle;
