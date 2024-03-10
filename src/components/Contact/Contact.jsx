import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function handleClick(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_2o5rq45",
        "template_x1jgtg8",
        event.target,
        "V8T-BnQcnCg_dNTxt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  }

  return (
    <>
      {/* <!-- Contact Start --> */}
      <div className="container-fluid contact py-5" id="contact">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px" }}
          >
            <h1 className="display-3">Contact Us</h1>
            <p className="fs-5 text-uppercase text-primary">Get In Touch</p>
          </div>
          <form onSubmit={handleClick}>
            <div className="row g-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="col-sm-6">
                <input
                  name="name"
                  type="text"
                  className="form-control bg-transparent p-3"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-sm-6">
                <input
                  name="email"
                  type="email"
                  className="form-control bg-transparent p-3"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="col-12">
                <input
                  name="subject"
                  type="text"
                  className="form-control bg-transparent p-3"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  className="w-100 form-control bg-transparent p-3"
                  rows="6"
                  cols="10"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button
                  className="btn btn-primary border-0 py-3 px-5"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- Contact Start --> */}
    </>
  );
};

export default Contact;
