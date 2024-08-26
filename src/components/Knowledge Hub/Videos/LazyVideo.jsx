import React from "react";
import LazyLoad from "react-lazyload";

const LazyVideo = ({ src, type, className, ...props }) => (
  <LazyLoad height={200} offset={100} once>
    <div className={`lazy-video ${className}`}>
      <video controls {...props}>
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  </LazyLoad>
);

export default LazyVideo;
