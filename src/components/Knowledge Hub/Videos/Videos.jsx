import React from "react";
import videoFile from "../Videos/Salma Batool.mp4";

const Videos = () => {
  return (
    <section style={{ paddingTop: "5rem" }}>
      <div class="container-fluid home py-5">
        <div class="container py-5">
          <div
            class="text-center mx-auto mb-5 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px" }}
          >
            <h1 class="display-3">Videos Section</h1>
          </div>
          <video width="640" height="360" controls>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Videos;
