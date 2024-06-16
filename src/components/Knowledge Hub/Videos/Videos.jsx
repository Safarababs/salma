import React from "react";
import videoFile from "../Videos/Salma Batool.mp4";
import videoFile1 from "../Videos/salma1.mp4";
import videoFile2 from "../Videos/salma2.mp4";

const Videos = () => {
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
            <div className="video-wrapper">
              <video className="video-item" controls>
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-wrapper">
              <video className="video-item" controls>
                <source src={videoFile1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-wrapper">
              <video className="video-item" controls>
                <source src={videoFile2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
