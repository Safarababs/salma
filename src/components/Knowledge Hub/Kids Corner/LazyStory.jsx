// LazyStory.jsx
import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import Stories from "../Kids Corner/Stories"; // Adjust import as per your structure
import { Link } from "react-router-dom";

const LazyStory = ({ className, ...props }) => {
  const [firstStory, setFirstStory] = useState(null);

  useEffect(() => {
    // Load the first story when component mounts
    setFirstStory(Stories[0]); // Assuming Stories is an array of story objects
  }, []);

  const renderContent = () => {
    if (!firstStory) return null;

    const { title, content } = firstStory;

    // Truncate content to first 180 characters
    const truncatedContent = content.substring(0, 400);
    const remainingContent = content.substring(400);

    return (
      <div className={`story-item ${className}`}>
        <h2>{title}</h2>
        <p>{truncatedContent}</p>
        {remainingContent.length > 0 && (
          <Link to="/kidsstories" className="btn btn-primary">
            Read Full Story
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

export default LazyStory;
