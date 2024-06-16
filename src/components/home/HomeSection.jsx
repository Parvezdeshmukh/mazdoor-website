import React from "react";
import "../../assets/css/style.css";
import maz from "../../assets/img/maz.png";
// import client1 from "../../assets/img/clients/client1.png";
// import client2 from "../../assets/img/clients/client2.png";
// import client3 from "../../assets/img/clients/client3.png";
// import client4 from "../../assets/img/clients/client4.png";
// import client5 from "../../assets/img/clients/client5.png";
// import client6 from "../../assets/img/clients/client6.png";
import ScrollToTop from "../ScrollToTop";

const HomeSection = () => {
  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6  d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h1>Better Solutions For Your Business</h1>
              <h2>
                We are team of talented Developer making websites with Mazdur
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a
                  href="https://play.google.com"
                  target="_blank"
                  className="btn-get-started scrollto"
                >
                  Login App
                </a>
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  className="glightbox btn-watch-video"
                >
                  <i className="bi bi-play-circle" />
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <img src={maz} className="img-fluid animated" alt />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}

      {/* ======= Clients Section ======= */}
      <section id="clients" className="clients section-bg">
        <div className="container">
          <div className="row" data-aos="zoom-in">
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              {/* <img src={client1} className="img-fluid" alt /> */}
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              {/* <img src={client2} className="img-fluid" alt /> */}
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              {/* <img src={client3} className="img-fluid" alt /> */}
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              {/* <img src={client4} className="img-fluid" alt /> */}
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              {/* <img src={client5} className="img-fluid" alt /> */}
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              {/* <img src={client6} className="img-fluid" alt /> */}
            </div>
          </div>
        </div>
      </section>
      {/* End Cliens Section */}
      <ScrollToTop />
    </div>
  );
};

export default HomeSection;
