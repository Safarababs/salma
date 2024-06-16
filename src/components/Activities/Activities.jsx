import React from "react";

const Activities = () => {
  return (
    <>
      {/* <!-- Activities Start --> */}
      <div className="container-fluid activities py-5" id="Activities">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px" }}
          >
            <h1 className="display-3">Our Activities</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 col-xl-4">
              <div
                className="activities-item p-4 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <i className="fa fa-mosque fa-4x text-dark"></i>
                <div className="ms-4">
                  <h4>Quranic Studies</h4>
                  <p className="mb-4">
                    Offering classNamees on recitation (Tajweed), memorization
                    (Hifz), and understanding (Tafseer) of Quran.
                  </p>
                  <a href="#contact" className="btn btn-primary px-3">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div
                className="activities-item p-4 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <i className="fa fa-book fa-4x text-dark"></i>
                <div className="ms-4">
                  <h4>Hadith Studies</h4>
                  <p className="mb-4">
                    classNamees focusing on the study and understanding of the
                    sayings and actions of the Prophet Muhammad (peace be upon
                    him).
                  </p>
                  <a href="#contact" className="btn btn-primary px-3">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div
                className="activities-item p-4 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <i className="fa fa-quran fa-4x text-dark"></i>
                <div className="ms-4">
                  <h4>Islamic Jurisprudence (Fiqh)</h4>
                  <p className="mb-4">
                    Courses on Islamic law and its application in daily life.
                    Islamic History: Exploring the history of Islam and its
                    civilizations.
                  </p>
                  <a href="#contact" className="btn btn-primary px-3">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div
                className="activities-item p-4 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <i className="fa fa-book fa-4x text-dark"></i>
                <div className="ms-4">
                  <h4>Arabic Language</h4>
                  <p className="mb-4">
                    Teaching Arabic for better understanding of the Quran and
                    Islamic texts.
                  </p>
                  <a href="#contact" className="btn btn-primary px-3">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div
                className="activities-item p-4 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <i className="fa fa-book-open fa-4x text-dark"></i>
                <div className="ms-4">
                  <h4>Spiritual Development</h4>
                  <p className="mb-4">
                    Workshops and lectures on building spirituality and a strong
                    connection with Allah.
                  </p>
                  <a href="#contact" className="btn btn-primary px-3">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div
                className="activities-item p-4 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <i className="fa fa-hands fa-4x text-dark"></i>
                <div className="ms-4">
                  <h4>Community Outreach</h4>
                  <p className="mb-4">
                    Programs to engage with the broader community and promote
                    understanding of Islam.
                  </p>
                  <a href="#contact" className="btn btn-primary px-3">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Activities Start --> */}
    </>
  );
};

export default Activities;
