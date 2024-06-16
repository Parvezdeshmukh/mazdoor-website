import React from "react";

const AboutSection = () => {
  return (
    <>
      {/* ======= About Us Section ======= */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About Us</h2>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              <p>Mazdur - Your One-Stop Shop for Doorstep Services in India.</p>
              <ul>
                <li>
                  <i className="ri-check-double-line" />
                  Mazdur is a leading Indian company dedicated to making your
                  life easier.
                </li>
                <li>
                  <i className="ri-check-double-line" /> Founded with the vision
                  of simplifying everyday chores
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                we provide a convenient and reliable platform to connect you
                with skilled professionals for a variety of doorstep services.
              </p>
              <a href="#" className="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us Section */}
    </>
  );
};

export default AboutSection;
