import React, { useState } from "react";
import Stories from "./Stories";

const KidsStories = () => {
  // Sample story data (you can replace this with your actual data structure)

  // State to manage which story's full content to display
  const [expandedStoryId, setExpandedStoryId] = useState(null);

  const handleExpandStory = (storyId) => {
    setExpandedStoryId(storyId === expandedStoryId ? null : storyId);
  };

  return (
    <section
      style={{
        paddingTop: "5rem",
        fontFamily: "'Noto Nastaliq Urdu', sans-serif",
      }}
    >
      <div className="container-fluid home py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <h1 className="display-3">Kids' Stories Section</h1>
          </div>
          <div className="row">
            {Stories.map((story) => (
              <div key={story.id} className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{story.title}</h5>
                    {expandedStoryId === story.id ? (
                      <p className="card-text">{story.content}</p>
                    ) : (
                      <p className="card-text">
                        {story.content.slice(0, 200)}...
                      </p>
                    )}
                    <button
                      className="btn btn-primary"
                      onClick={() => handleExpandStory(story.id)}
                    >
                      {expandedStoryId === story.id ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsStories;
