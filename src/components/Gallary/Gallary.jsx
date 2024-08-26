import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import images from "./imageFiles"; // Import images from the imageFiles.js

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(5); // Start by showing 5 images

  // Show more images when the button is clicked
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Add 5 more images
  };

  // Display only the number of images specified by visibleCount
  const displayedImages = images.slice(0, visibleCount);

  return (
    <section id="gallery">
      <div className="gallery-container">
        {displayedImages.map((src, index) => (
          <div key={index} className="gallery-item">
            <LazyLoadImage
              alt={`Gallery Image ${index + 1}`}
              src={src}
              effect="blur"
            />
          </div>
        ))}
      </div>
      {visibleCount < images.length && (
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
