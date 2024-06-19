// src/components/LazyVideo.jsx
import React from "react";
import LazyLoad from "react-lazyload";

const LazyVideo = ({ src, type, ...props }) => (
  <LazyLoad height={200} offset={100} once>
    <video controls {...props}>
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  </LazyLoad>
);

export default LazyVideo;
