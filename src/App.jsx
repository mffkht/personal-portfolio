import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./App.css";

const App = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const galleryImages = [
    "img-01.jpg",
    "img-02.jpg",
    "img-03.jpg",
    "img-04.jpg",
    "img-05.jpg",
    "img-06.jpg",
  ];

  return (
    <>
      {/* Loader */}
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>

      <div className="container">
        <div className="tm-top-bar"></div>

        {/* Welcome Section */}
        <section className="tm-welcome">
          <div className="tm-welcome-left">
            <div className="tm-logo">
              <h1 className="tm-site-name">About me</h1>
            </div>
            <div className="tm-welcome-content">
              <div className="tm-welcome-icons-container">
                <i className="fas fa-crown fa-5x tm-welcome-icon"></i>
                <i className="fas fa-heart fa-5x tm-welcome-icon"></i>
              </div>
              <h2 className="tm-mb-25">Maffia khate Guaro</h2>
              <p className="tm-font-big">
                <a
                  // rel="nofollow"
                  // href="http://www.templatemo.com/tm-519-beauty"
                  // target="_parent"
                >
                  The Beauty CSS Template
                </a>{" "}
                BSIS 3 | Aspiring Business Analyst{" "}
                <a
                  href="https://plus.google.com/+templatemo"
                  target="_blank"
                  rel="noreferrer"
                >
                  templatemo
                </a>{" "}
                and it is going to be helpful. Thank you.
              </p>
              <a href="#" className="tm-welcome-link tm-font-big">
                Continue...
              </a>
            </div>
          </div>
          <div className="tm-welcome-right"></div>
        </section>

        <div className="tm-bar-2"></div>

        {/* Section 2 */}
        <section className="row tm-section-mb tm-section-2">
          <div className="col-md-12 tm-section-2-inner">
            <div className="tm-section-2-left">
              <div className="tm-img-container tm-img-container-1"></div>
              <div className="tm-img-container tm-img-container-2"></div>
            </div>
            <div className="tm-section-2-right tm-bg-primary">
              <div className="tm-section-2-text">
                <h2 className="tm-section-2-header tm-mb-45">
                  Let's get social!
                </h2>
                <p>
                  Aliquam facilisis in orci et mattis. Duis et sem sit amet nibh
                  euismod cursus. In sit amet metus purus. Sed tristique
                  efficitur imperdiet. Proin ornare a nibh a tristique. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="tm-p-ml">
                  Nulla rutrum purus vitae vulputate tincidunt. Suspendisse eget
                  mi justo. Ut in erat nec odio volutpat lacinia ac a quam.
                  <br />
                  <br />
                  Integer pretium dapibus tellus vitae pretium. Nulla molestie
                  lectus in viverra dignissim.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="row tm-section-3">
          <div className="col-md-12 tm-section-3-inner">
            <div className="tm-section-3-left tm-bg-primary">
              <div className="tm-section-3-text">
                <i className="fas fa-users fa-5x tm-welcome-icon d-block text-center ml-0"></i>
                <h2 className="tm-section-3-header tm-mb-35">Opportunities</h2>
                <p>
                  Praesent ac bibendum tortor, mollis interdum nisl. Integer
                  egestas nec lectus fringilla consectetur. Nullam tempus ante
                  ligula.
                </p>
                <a href="#" className="d-block tm-welcome-link">
                  Continue...
                </a>
              </div>
            </div>
            <div className="tm-section-3-right">
              <div className="tm-img-container tm-img-container-3"></div>
            </div>
          </div>
        </section>

        {/* Gallery (React Slick Version) */}
        <section className="row tm-section-pb">
          <div className="col-md-12 tm-bg-accent tm-gallery-pad tm-gallery-container mx-auto">
            <h2 className="text-center tm-mb-45">Image Gallery</h2>
            <Slider {...sliderSettings}>
              {galleryImages.map((img, index) => (
                <div key={index} className="tm-gallery-item">
                  <img src={`img/${img}`} alt={`Gallery ${index + 1}`} />
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Contact */}
        <section className="row">
          <div className="col-md-7 d-flex tm-contact-left-col">
            <div className="tm-bg-primary tm-contact-left">
              <div className="tm-contact-left-inner">
                <h2 className="text-center tm-mb-40 tm-contact-header">
                  HERE WE ARE
                </h2>
                <p className="tm-line-height-2 mb-5">
                  Etiam congue tempor risus, id porta massa laoreet at. Nunc
                  risus elit, porttitor sit amet sem.
                </p>
                <div className="mb-2 tm-font-normal">
                  Tel:{" "}
                  <a href="tel:0900900990" className="mt-5 tm-contact-link">
                    090-090-0990
                  </a>
                </div>
                <div className="mb-2 tm-font-normal">
                  Fax:{" "}
                  <a href="tel:0800800880" className="tm-contact-link">
                    080-080-0880
                  </a>
                </div>
                <div className="mb-2 tm-font-normal">
                  Email:{" "}
                  <a href="mailto:info@company.com" className="tm-contact-link">
                    info@company.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <form action="#" method="post" className="tm-contact-form">
              <div className="form-group mb-4">
                <input
                  type="text"
                  id="contact_name"
                  name="contact_name"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <textarea
                  rows="6"
                  id="contact_message"
                  name="contact_message"
                  className="form-control"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="form-group mb-0">
                <button
                  type="submit"
                  className="btn btn-primary tm-btn-round tm-fl-right"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-4 pb-4">
          <p className="text-center tm-text-light-dark">
            Copyright &copy; 2018 Company Name | Design:{" "}
            <a
              rel="nofollow"
              href="http://templatemo.com"
              className="tm-text-light-dark"
            >
              TemplateMo
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
