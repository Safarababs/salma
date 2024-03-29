import React from "react";

const Header = () => {
  return (
    <>
      {/* // spinner start */}
      {/* <div
        id="spinner"
        className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary" role="status"></div>
      </div> */}

      {/* // spinner end */}

      {/* // top bar start */}
      <div className="container-fluid fixed-top">
        <div className="container topbar d-none d-lg-block">
          <div className="topbar-inner">
            <div className="row gx-0">
              <div className="col-lg-7 text-start">
                <div className="h-100 d-inline-flex align-items-center me-4">
                  <span className="fa fa-phone-alt me-2 text-dark"></span>
                  <a
                    href="https://wa.me/00923002774569?text=Hi%20there!%20I%20have%20a%20question%20from%20your%20website"
                    className="text-secondary"
                  >
                    <span>+92 300 2774569</span>
                  </a>
                </div>
                {/* <div className="h-100 d-inline-flex align-items-center">
                  <span className="far fa-envelope me-2 text-dark"></span>
                  <a href="/" className="text-secondary">
                    <span>info@example.com</span>
                  </a>
                </div> */}
              </div>
              <div className="col-lg-5 text-end">
                <div className="h-100 d-inline-flex align-items-center">
                  <span className="text-body">Follow Us:</span>
                  <a
                    className="text-dark px-2"
                    href="https://www.facebook.com/profile.php?id=61555722093496"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="text-body ps-4" href="/">
                    <i className="fa fa-lock text-dark me-1"></i> Signup/login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <nav className="navbar navbar-light navbar-expand-lg py-3">
            <a href="/" className="navbar-brand">
              <h1 className="mb-0">
                Al<span className="text-primary">Ramadan</span>
              </h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div
              className="collapse navbar-collapse bg-white"
              id="navbarCollapse"
            >
              <div className="navbar-nav ms-lg-auto mx-xl-auto">
                <a href="#home" className="nav-item nav-link active">
                  Home
                </a>
                <a href="#about" className="nav-item nav-link">
                  About
                </a>
                <a href="#Activities" className="nav-item nav-link">
                  Activities
                </a>
                <a href="#contact" className="nav-item nav-link">
                  Contact
                </a>
                <a href="#gallery" className="nav-item nav-link">
                  gallery
                </a>
                {/* <div className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    More
                  </a>
                  <div className="dropdown-menu m-0 rounded-0">
                    <a href="/" className="dropdown-item">
                      Students
                    </a>
                    <a href="/" className="dropdown-item">
                      Exams
                    </a>
                    <a href="/" className="dropdown-item">
                      Results
                    </a>
                  </div>
                </div> */}
              </div>
              <a
                href="#contact"
                className="btn btn-primary py-2 px-4 d-none d-xl-inline-block"
              >
                Donate
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* // top bar end */}

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
    </>
  );
};

export default Header;
