import React, { useState } from "react";
import LazyVideo from "./LazyVideo";
import { videoFile, videoFile1, videoFile2, videoFile3 } from "./videoFiles"; // Adjusted path

const Videos = () => {
  // Array of all video sources
  const videoSources = [videoFile3, videoFile2, videoFile1, videoFile];

  // State to track if all videos should be shown
  const [showAll, setShowAll] = useState(false);

  // Determine which videos to display
  const displayedVideos = showAll ? videoSources : videoSources.slice(0, 3);

  return (
    <section style={{ paddingTop: "5rem" }}>
      <div className="container-fluid home py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px" }}
          >
            <h1 className="display-3">Videos Section</h1>
          </div>
          <div className="videos">
            {displayedVideos.map((src, index) => (
              <div key={index} className="video-wrapper">
                <LazyVideo className="video-item" src={src} type="video/mp4" />
              </div>
            ))}
          </div>
          {/* Show More / Show Less Button */}
          <div className="text-center mt-4">
            <button
              className="btn btn-primary"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
