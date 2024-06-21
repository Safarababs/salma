import React from "react";
import { useLanguage } from "../language/language";
import safar from "../img/safar.png";
import female from "../img/female.png";

const Team = () => {
  const { language } = useLanguage(); // Access language context

  return (
    <>
      <div className="container-fluid team py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px" }}
          >
            <p className="fs-5 text-uppercase text-primary">
              {language === "ur" ? "ہماری ٹیم" : "Our Team"}
            </p>
            <h1 className="display-3">
              {language === "ur" ? "ہمارے منظم" : "Meet Our Organizer"}
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-xl-5">
              <div className="team-img wow zoomIn" data-wow-delay="0.1s">
                <img src={female} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-8 col-xl-7">
              <div className="team-item wow fadeIn" data-wow-delay="0.1s">
                <h1>Salma Batool Hussaini</h1>
                <h5 className="fw-normal fst-italic text-primary mb-4">
                  {language === "ur" ? "صدر" : "President"}
                </h5>
                <p className="mb-4">
                  {language === "ur"
                    ? "ال رمضان اسلامک انسٹی ٹیوٹ میں خوش آمدید۔ ہم دیجیٹل عصر میں شیعہ اسلام پھیلانے کے لئے آن لائن تعلیم فراہم کر رہے ہیں۔ ہمارے مختار آن لائن کورسز، اسلامی تعلیمات کے بنیادی ہیں، جو آپ کی ضروریات کے مطابق لچکدار اور دسترس پذیر تعلیم فراہم کرتے ہیں۔ ہمارے وقفت شعبدہ، ہم آپ کو سرگرم دماغیں کے لیے مستحکم کرنے کے لیے مدد کرنے کی کوشش کر رہے ہیں۔"
                    : "Welcome to Al Ramzan Islamic Institute. In this digital age we are providing online education to spread Shia Islam. Our curated online courses, rooted in Islamic teachings, offer flexible and accessible education tailored to your needs. Led by our dedicated faculty, we aim to enrich minds, empowering you to lead a purposeful life."}
                </p>
                <div className="team-icon d-flex pb-4 mb-4 border-bottom border-primary">
                  <a
                    className="btn btn-primary btn-lg-square me-2"
                    href="https://www.youtube.com/@alramzanislamicinstitute"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-lg-square me-2"
                    href="https://www.facebook.com/profile.php?id=100083493072689"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/salma_batool_?utm_source=qr&igsh=MTZ0NzFhZW1qNXFpNw=="
                    className="btn btn-primary btn-lg-square me-2"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-item wow zoomIn" data-wow-delay="0.6s">
                  <img src={safar} className="img-fluid w-100" alt="" />
                  <p>
                    {language === "ur"
                      ? "سفر عباس (آئی ٹی انجینئر)"
                      : "Safar Abbas (IT Engineer)"}
                  </p>
                  <div className="team-content text-dark text-center py-3">
                    <div className="team-content-inner">
                      <h5 className="mb-0">
                        {language === "ur" ? "سفر عباس" : "Safar Abbas"}
                      </h5>
                      <p className="text-dark">
                        {language === "ur" ? "آئی ٹی انجینئر" : "IT Engineer"}
                      </p>
                      <div className="team-icon d-flex align-items-center justify-content-center">
                        <a
                          className="btn btn-primary btn-sm-square me-2"
                          href="https://www.facebook.com/safarabbaskamboh/"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          className="btn btn-primary btn-sm-square me-2"
                          href="https://www.youtube.com/channel/UCtEw17K9z4lpm4Q_vWt4IBQ"
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/safarabbas_2010?igsh=YzljYTk1ODg3Zg=="
                          className="btn btn-primary btn-sm-square me-2"
                        >
                          <i className="fab fa-instagram"></i>
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
