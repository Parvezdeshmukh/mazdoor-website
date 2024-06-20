import React from "react";
import parvez from "../../assets/img/team/parvez.jpg";
import team1 from "../../assets/img/team/team1.jpg";
import team2 from "../../assets/img/team/team2.jpg";
import team3 from "../../assets/img/team/team3.jpg";

const TeamSection = () => {
  const [collapsed, setCollapsed] = useState({
    faq2: true,
    faq3: true,
  });

  const toggleCollapse = (faq) => {
    setCollapsed((prevState) => ({
      ...prevState,
      [faq]: !prevState[faq],
    }));
  };

  return (
    <>
      {/* ======= Team Section ======= */}
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Team</h2>
            <p></p>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={100}>
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={parvez} className="img-fluid" alt />
                </div>
                <div className="member-info">
                  <h4>Parvez Deshmukh</h4>
                  <span>Web Developer</span>
                  <p>
                    {/* Explicabo voluptatem mollitia et repellat qui dolorum quasi */}
                  </p>
                  <div className="social">
                    <a href>
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href>
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href>
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href>
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={team1} className="img-fluid" alt />
                </div>
                <div className="member-info">
                  <h4>Numan Al Jilani</h4>
                  <span>Application Developer</span>
                  <p>
                    {/* Aut maiores voluptates amet et quis praesentium qui senda
                    para */}
                  </p>
                  <div className="social">
                    <a href>
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href>
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href>
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href>
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mt-4"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={team1} className="img-fluid" alt />
                </div>
                <div className="member-info">
                  <h4>Musharraf</h4>
                  <span>Project Manager</span>
                  <p>
                    {/* Quisquam facilis cum velit laborum corrupti fuga rerum quia */}
                  </p>
                  <div className="social">
                    <a href>
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href>
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href>
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href>
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mt-4"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={team3} className="img-fluid" alt />
                </div>
                <div className="member-info">
                  <h4>Shahbaz</h4>
                  <span>Tester</span>
                  <p>
                    {/* Dolorum tempora officiis odit laborum officiis et et
                    accusamus */}
                  </p>
                  <div className="social">
                    <a href>
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href>
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href>
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href>
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mt-4"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={team3} className="img-fluid" alt />
                </div>
                <div className="member-info">
                  <h4>Saad</h4>
                  <span>UI Designer</span>
                  <p>
                    {/* Dolorum tempora officiis odit laborum officiis et et
                    accusamus */}
                  </p>
                  <div className="social">
                    <a href>
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href>
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href>
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href>
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mt-4"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={team3} className="img-fluid" alt />
                </div>
                <div className="member-info">
                  <h4>Vishal</h4>
                  <span>Application Developer</span>
                  <p>
                    {/* Dolorum tempora officiis odit laborum officiis et et
                    accusamus */}
                  </p>
                  <div className="social">
                    <a href>
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href>
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href>
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href>
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= Frequently Asked Questions Section ======= */}
      <section id="faq" className="faq section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 className="text-light">Frequently Asked Questions</h2>
            <p className="text-light"></p>
          </div>
          <div className="faq-list">
            <ul>
              <li data-aos="fade-up" data-aos-delay={200}>
                <i className="bx bx-help-circle icon-help" />{" "}
                <a
                  href="#!"
                  onClick={() => toggleCollapse("faq2")}
                  className={collapsed.faq2 ? "collapsed" : ""}
                >
                  Our Mission: <i className="bx bx-chevron-down icon-show" />
                  <i className="bx bx-chevron-up icon-close" />
                </a>
                <div
                  id="faq-list-2"
                  className={`collapse ${collapsed.faq2 ? "" : "show"}`}
                  data-bs-parent=".faq-list"
                >
                  <p>
                    To empower Indian households with effortless access to
                    high-quality home services, delivered with professionalism
                    and care.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={300}>
                <i className="bx bx-help-circle icon-help" />{" "}
                <a
                  href="#!"
                  onClick={() => toggleCollapse("faq3")}
                  className={collapsed.faq3 ? "collapsed" : ""}
                >
                  Our Vision <i className="bx bx-chevron-down icon-show" />
                  <i className="bx bx-chevron-up icon-close" />
                </a>
                <div
                  id="faq-list-3"
                  className={`collapse ${collapsed.faq3 ? "" : "show"}`}
                  data-bs-parent=".faq-list"
                >
                  <p>
                    We dream of becoming the most trusted name in doorstep
                    services across India, synonymous with efficiency,
                    affordability, and exceptional customer satisfaction.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* End Frequently Asked Questions Section */}
      {/* End Team Section */}
    </>
  );
};

export default TeamSection;
