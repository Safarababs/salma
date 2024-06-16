import React from "react";
import about1 from "../img/about-1.jpg";
import about2 from "../img/about-2.jpg";
import about3 from "../img/about-3.jpg";

const About = () => {
  return (
    <>
      {/* <!-- About Satrt --> */}
      <div className="container-fluid about py-5" id="about">
        <div className="container py-5">
          <div className="row g-5 mb-5">
            <div className="col-xl-6">
              <div className="row g-4">
                <div className="col-6">
                  <img
                    src={about1}
                    className="img-fluid h-100 wow zoomIn"
                    data-wow-delay="0.1s"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <img
                    src={about2}
                    className="img-fluid pb-3 wow zoomIn"
                    data-wow-delay="0.1s"
                    alt=""
                  />
                  <img
                    src={about3}
                    className="img-fluid pt-3 wow zoomIn"
                    data-wow-delay="0.1s"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-5 pb-4 m-0">About Us</h1>
              <p className="pb-4">
                Al Ramadan Islamic Institute is dedicated to providing
                comprehensive Islamic education and fostering a deep
                understanding of the Quran and Ahlul Bait. We strive to create a
                nurturing environment where students can develop a strong
                connection with their faith and community.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <div className="ps-3 d-flex align-items-center justify-content-start">
                    <span className="bg-primary btn-md-square rounded-circle mt-4 me-2">
                      <i className="fa fa-eye text-dark fa-4x mb-5 pb-2"></i>
                    </span>
                    <div className="ms-4">
                      <h5>Our Vision</h5>
                      <p>
                        We aspire to be a leading center for authentic Islamic
                        education, fostering vibrant communities of knowledge
                        and understanding that inspire individuals globally.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ps-3 d-flex align-items-center justify-content-start">
                    <span className="bg-primary btn-md-square rounded-circle mt-4 me-2">
                      <i className="fa fa-flag text-dark fa-4x mb-5 pb-2"></i>
                    </span>
                    <div className="ms-4">
                      <h5>Our Mission</h5>
                      <p>
                        Dedicated to empowering individuals through
                        comprehensive and accessible Islamic learning
                        experiences, promoting peace, and fostering positive
                        contributions to society.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container text-center bg-primary py-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div className="row g-4 align-items-center">
              <div className="col-lg-2">
                <i className="fa fa-mosque fa-5x text-white"></i>
              </div>
              <div className="col-lg text-center text-lg-start">
                <h1 className="mb-0">
                  Every Muslim Needs To Realise The Importance Of The "Pillar"
                  Of Islam
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </>
  );
};

export default About;
