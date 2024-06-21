import React from "react";
import { useLanguage } from "../language/language";

const Activities = () => {
  const { language } = useLanguage(); // Access language context

  return (
    <>
      {/* Activities Start */}
      <div className="container-fluid activities py-5" id="Activities">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px" }}
          >
            <h1 className="display-3">
              {language === "ur" ? "ہماری سرگرمیاں" : "Our Activities"}
            </h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 col-xl-4">
              <div
                className="activities-item p-4 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <i className="fa fa-mosque fa-4x text-dark"></i>
                <div className="ms-4">
                  <h4>
                    {language === "ur" ? "قرآنی مطالعات" : "Quranic Studies"}
                  </h4>
                  <p className="mb-4">
                    {language === "ur"
                      ? "قرآن کی تلاوت (تجوید)، یاد رکھنے (حفظ) اور سمجھنے (تفسیر) پر کلاسیں فراہم کرنا۔"
                      : "Offering classes on recitation (Tajweed), memorization (Hifz), and understanding (Tafseer) of Quran."}
                  </p>
                  <a href="#contact" className="btn btn-primary px-3">
                    {language === "ur" ? "مزید جانیں" : "Learn More"}
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
                  <h4>
                    {language === "ur" ? "حدیث کی مطالعہ" : "Hadith Studies"}
                  </h4>
                  <p className="mb-4">
                    {language === "ur"
                      ? "پیغمبر محمد (صلى الله عليه وآله وسلم) کے اقوال اور اعمال کی مطالعہ اور سمجھنے پر مرکوز کلاسیں۔"
                      : "Classes focusing on the study and understanding of the sayings and actions of the Prophet Muhammad (peace be upon him)."}
                  </p>
                  <a href="#contact" className="btn btn-primary px-3">
                    {language === "ur" ? "مزید جانیں" : "Learn More"}
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
                  <h4>
                    {language === "ur"
                      ? "اسلامی فقہیات (فقہ)"
                      : "Islamic Jurisprudence (Fiqh)"}
                  </h4>
                  <p className="mb-4">
                    {language === "ur"
                      ? "اسلامی قوانین اور ان کے روزمرہ کے استعمال پر مرکوز کورسز۔"
                      : "Courses on Islamic law and its application in daily life."}{" "}
                    {language === "ur"
                      ? "اسلامی تاریخ: اسلام اور اس کی تہذیبات کی تاریخ کی کاوش۔"
                      : "Islamic History: Exploring the history of Islam and its civilizations."}
                  </p>
                  <a href="#contact" className="btn btn-primary px-3">
                    {language === "ur" ? "مزید جانیں" : "Learn More"}
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
                  <h4>{language === "ur" ? "عربی زبان" : "Arabic Language"}</h4>
                  <p className="mb-4">
                    {language === "ur"
                      ? "قرآن اور اسلامی متون کو بہتر سمجھنے کے لئے عربی کی تعلیم۔"
                      : "Teaching Arabic for better understanding of the Quran and Islamic texts."}
                  </p>
                  <a href="#contact" className="btn btn-primary px-3">
                    {language === "ur" ? "مزید جانیں" : "Learn More"}
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
                  <h4>
                    {language === "ur"
                      ? "روحانی ترقی"
                      : "Spiritual Development"}
                  </h4>
                  <p className="mb-4">
                    {language === "ur"
                      ? "روحانیت کی تعمیر اور اللہ کے ساتھ مضبوط رابطے کی بنیاد رکھنے کے بارے میں ورکشاپ اور تبلیغات۔"
                      : "Workshops and lectures on building spirituality and a strong connection with Allah."}
                  </p>
                  <a href="#contact" className="btn btn-primary px-3">
                    {language === "ur" ? "مزید جانیں" : "Learn More"}
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
                  <h4>
                    {language === "ur"
                      ? "کمیونٹی آؤٹ ریچ"
                      : "Community Outreach"}
                  </h4>
                  <p className="mb-4">
                    {language === "ur"
                      ? "بڑے پیمانے پر معاشرتی ہم آہنگی کے لیے پروگرام اور اسلام کی سمجھ کو فروغ دینے۔"
                      : "Programs to engage with the broader community and promote understanding of Islam."}
                  </p>
                  <a href="#contact" className="btn btn-primary px-3">
                    {language === "ur" ? "مزید جانیں" : "Learn More"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Activities End */}
    </>
  );
};

export default Activities;
