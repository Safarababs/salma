import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import gallery1 from "./GallaryImages/1.jpg";
import gallery2 from "./GallaryImages/2.jpg";
import gallery3 from "./GallaryImages/3.jpg";
import gallery4 from "./GallaryImages/4.jpg";
import gallery5 from "./GallaryImages/5.jpg";
import gallery6 from "./GallaryImages/6.jpg";
import gallery7 from "./GallaryImages/7.jpg";
import gallery8 from "./GallaryImages/8.jpg";
import gallery9 from "./GallaryImages/9.jpg";
import gallery10 from "./GallaryImages/10.jpg";
import gallery11 from "./GallaryImages/11.jpg";
import gallery12 from "./GallaryImages/12.jpg";
import gallery13 from "./GallaryImages/13.jpg";
import gallery14 from "./GallaryImages/14.jpg";
import gallery15 from "./GallaryImages/15.jpg";

const images = [
  gallery15,
  gallery14,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery8,
  gallery7,
  gallery6,
  gallery5,
  gallery4,
  gallery3,
  gallery2,
  gallery1,
];

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="gallery-container">
        {images.map((Url, index) => (
          <div key={index} className="gallery-item">
            <LazyLoadImage
              alt="contact developer"
              height={200}
              src={Url}
              width={300}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
