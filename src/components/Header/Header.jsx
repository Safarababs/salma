import React from "react";
import SearchBar from "../Search Bar/SearchBar";

const Header = () => {
  return (
    <>
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
                    href="https://www.facebook.com/profile.php?id=100083493072689"
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
          <div className="ms-auto d-flex align-items-center">
            <SearchBar />
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
                <a href="/" className="nav-item nav-link active">
                  Home
                </a>
                <a href="/#about" className="nav-item nav-link">
                  About
                </a>
                <a href="/#Activities" className="nav-item nav-link">
                  Activities
                </a>

                <a href="/gallery" className="nav-item nav-link">
                  gallery
                </a>
                <a href="/#contact" className="nav-item nav-link">
                  Contact
                </a>

                <div className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Knowledge Hub
                  </a>
                  <div className="dropdown-menu m-0 rounded-0">
                    <a href="/kidsstories" className="dropdown-item">
                      Kids Stories
                    </a>
                    <a href="/videos" className="dropdown-item">
                      Videos
                    </a>
                    <a href="/majalis" className="dropdown-item">
                      Majalis
                    </a>
                    <a href="/makalajaat" className="dropdown-item">
                      Makala Jaat
                    </a>
                    <a href="/quiz" className="dropdown-item">
                      Quiz
                    </a>
                  </div>
                </div>
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
    </>
  );
};

export default Header;
