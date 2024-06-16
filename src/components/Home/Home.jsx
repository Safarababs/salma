import React from "react";
import About from "../About/About";
import Activities from "../Activities/Activities";
import Contact from "../Contact/Contact";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      {/* <!-- Hero Start --> */}
      <div className="container-fluid hero-header" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="hero-header-inner animated zoomIn">
                <p className="fs-4 text-dark">WELCOME TO</p>
                <h1 className="display-1 mb-5 text-dark">
                  Al Ramadan Islamic Institute
                </h1>
                <a href="#about" className="btn btn-primary py-3 px-5">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}
      <About />
      <Activities />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
