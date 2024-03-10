// Gallery.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gallary1 from "./GallaryImages/1.jpg";
import gallary2 from "./GallaryImages/2.jpg";
import gallary3 from "./GallaryImages/3.jpg";

const images = [gallary1, gallary2, gallary3];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section style={{ background: "#</section>" }}>
      <div
        className="mx-auto text-center mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ maxWidth: "700px" }}
      >
        <h1 className="display-3">Gallery</h1>
      </div>
      <div className="gallery">
        <Slider {...settings}>
          {images.map((imageUrl, index) => (
            <div key={index} className="gallery-item">
              <img src={imageUrl} alt={`${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
