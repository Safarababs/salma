import React from "react";
import safar from "../img/safar.png";
import female from "../img/female.png";
const Team = () => {
  return (
    <>
      <div class="container-fluid team py-5">
        <div class="container py-5">
          <div
            class="text-center mx-auto mb-5 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px" }}
          >
            <p class="fs-5 text-uppercase text-primary">Our Team</p>
            <h1 class="display-3">Meet Our Organizer</h1>
          </div>
          <div class="row g-5">
            <div class="col-lg-4 col-xl-5">
              <div class="team-img wow zoomIn" data-wow-delay="0.1s">
                <img src={female} class="img-fluid" alt="" />
              </div>
            </div>
            <div class="col-lg-8 col-xl-7">
              <div class="team-item wow fadeIn" data-wow-delay="0.1s">
                <h1>Salma Batool Hussaini</h1>
                <h5 class="fw-normal fst-italic text-primary mb-4">
                  President
                </h5>
                <p class="mb-4">
                  Welcome to Al Ramzan Islamic Institute. In this digital age we
                  are providing online education to spread Shia Islam. Our
                  curated online courses, rooted in Islamic teachings, offer
                  flexible and accessible education tailored to your needs. Led
                  by our dedicated faculty, we aim to enrich minds, empowering
                  you to lead a purposeful life
                </p>
                <div class="team-icon d-flex pb-4 mb-4 border-bottom border-primary">
                  <a
                    class="btn btn-primary btn-lg-square me-2"
                    href="https://www.youtube.com/@alramzanislamicinstitute"
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a
                    class="btn btn-primary btn-lg-square me-2"
                    href="https://www.facebook.com/profile.php?id=100083493072689"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/salma_batool_?utm_source=qr&igsh=MTZ0NzFhZW1qNXFpNw=="
                    class="btn btn-primary btn-lg-square me-2"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div class="col-md-4">
                <div class="team-item wow zoomIn" data-wow-delay="0.6s">
                  <img src={safar} class="img-fluid w-100" alt="" />
                  <p>Safar Abbas (IT Engineer)</p>
                  <div class="team-content text-dark text-center py-3">
                    <div class="team-content-inner">
                      <h5 class="mb-0">Safar Abbas</h5>
                      <p class="text-dark">IT Engineer</p>
                      <div class="team-icon d-flex align-items-center justify-content-center">
                        <a
                          class="btn btn-primary btn-sm-square me-2"
                          href="https://www.facebook.com/safarabbaskamboh/"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a
                          class="btn btn-primary btn-sm-square me-2"
                          href="https://www.youtube.com/channel/UCtEw17K9z4lpm4Q_vWt4IBQ"
                        >
                          <i class="fab fa-youtube"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/safarabbas_2010?igsh=YzljYTk1ODg3Zg=="
                          class="btn btn-primary btn-sm-square me-2"
                        >
                          <i class="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
