import React from "react";

const ServiceSection = () => {
  return (
    <>
      {/* ======= Services Section ======= */}
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>
              Bringing Convenience to Your Doorstep Mazdoor offers a
              comprehensive range of services to cater to your diverse needs:
            </p>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="fa-solid fa-wrench"></i>
                </div>
                <h4>
                  <a href>Plumbing</a>
                </h4>
                <p>
                  Leaky faucets, clogged drains, or complex pipe repairs - our
                  skilled plumbers are equipped to handle it all.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <h4>
                  <a href>Electricians</a>
                </h4>
                <p>
                  From basic wiring solutions to intricate electrical repairs
                  and installations, our certified electricians ensure safety
                  and efficiency.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="fa-solid fa-hand"></i>
                </div>
                <h4>
                  <a href>Handyman Services</a>
                </h4>
                <p>
                  Need help with furniture assembly, painting touch-ups, or
                  mounting shelves? Our dependable handymen are here to assist
                  you.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="fa-solid fa-person-military-pointing"></i>
                </div>
                <h4>
                  <a href>Excellent Customer Support</a>
                </h4>
                <p>
                  Our dedicated customer support team is always available to
                  address your concerns and ensure your satisfaction.
                </p>
              </div>
            </div>
            <div className="section-title mt-5">
              <h2>What Makes Mazdur Different?</h2>
              <p>
                We don't just offer doorstep services - we provide an
                unparalleled user experience:
              </p>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="fa-solid fa-genderless"></i>
                </div>
                <h4>
                  <a href>Seamless Booking</a>
                </h4>
                <p>
                  Schedule appointments easily through our user-friendly app or
                  website, available 24/7.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <h4>
                  <a href>Verified Professionals</a>
                </h4>
                <p>
                  All our service providers are thoroughly background-verified
                  and possess the necessary skills and experience.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-layer" />
                </div>
                <h4>
                  <a href>Transparent Pricing</a>
                </h4>
                <p>
                  Get upfront quotes before booking, ensuring there are no
                  hidden charges.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="fa-solid fa-money-check-dollar"></i>
                </div>
                <h4>
                  <a href>Secure Payment Options</a>
                </h4>
                <p>
                  Pay securely through our integrated payment gateway for a
                  hassle-free experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= Cta Section ======= */}
      <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
          <div className="row">
            <div className="col-lg-9 text-center text-lg-start">
              <h3>Call To Action</h3>
              <p>
                {" "}
                Feel free to place this CTA button prominently to catch the
                attention of your visitors and encourage them to take action.
              </p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <a className="cta-btn align-middle" href="#">
                Call To Action
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Cta Section */}

      {/* End Services Section */}
    </>
  );
};

export default ServiceSection;
