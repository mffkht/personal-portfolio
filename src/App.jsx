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

        {/* === ABOUT ME SECTION === */}
        <section className="tm-welcome">
          <div className="tm-welcome-left">
            <div className="tm-logo">
              <h1 className="tm-site-name">About Me</h1>
            </div>
            <div className="tm-welcome-content">
              <div className="tm-welcome-icons-container">
                <i className="fas fa-laptop-code fa-5x tm-welcome-icon"></i>
                <i className="fas fa-heart fa-5x tm-welcome-icon"></i>
              </div>
              <h2 className="tm-mb-25">Hi, I'm Maffia Khate Guaro</h2>
              <p className="tm-font-big">
                 <strong>BSIS 3 | Aspiring Business Analyst</strong>
              </p>
              <p>
                I’m currently pursuing a <b>Bachelor of Science in Information Systems</b>,
                developing skills in <b>business processes</b>, <b>problem-solving</b>,
                and <b>data analysis</b>.  
                I’m passionate about bridging the gap between business needs and
                technology solutions — continuously learning, growing, and exploring
                ways to make digital systems smarter and more efficient.
              </p>
              <p>
                 My goal is to become a <b>Business Analyst</b> who helps
                organizations improve their operations and make data-driven decisions.
                I love learning new technologies and taking on real-world projects
                that challenge my creativity and logic.
              </p>
              <p>
                 Reach me at:{" "}
                <a href="mailto:maffiakhateg@gmail.com" className="tm-contact-link">
                  maffiakhateg@gmail.com
                </a>
              </p>
              <a href="#" className="tm-welcome-link tm-font-big">
                View My Projects
              </a>
            </div>
          </div>
         
        </section>

        <div className="tm-bar-2"></div>

        {/* === TECH STACK SECTION === */}
        <section className="row tm-section-mb tm-section-2">
          <div className="col-md-12 tm-section-2-inner">
            <div className="tm-section-2-left">
              <div className="tm-img-container tm-img-container-1"></div>
              <div className="tm-img-container tm-img-container-2"></div>
            </div>
            <div className="tm-section-2-right tm-bg-primary">
              <div className="tm-section-2-text">
                <h2 className="tm-section-2-header tm-mb-45"> Tech Stack</h2>
                <p>
                  <b>Languages:</b> JavaScript, PHP, HTML, CSS <br />
                  <b>Frameworks & Tools:</b> React, Laravel, Node.js, MySQL, Git, Figma, VS Code <br />
                  <b>Other Interests:</b> Data Analytics, UX/UI Design, Project Documentation
                </p>
                <p>
                  I enjoy experimenting with new frameworks and building clean,
                  user-friendly applications that make technology more accessible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === GITHUB STATS SECTION === */}
        <section className="row tm-section-3">
          <div className="col-md-12 tm-section-3-inner">
            <div className="tm-section-3-left tm-bg-primary text-center">
              <div className="tm-section-3-text">
                <h2 className="tm-section-3-header tm-mb-35">GitHub Stats</h2>
                <p>Here’s a quick look at my GitHub activity and progress!</p>
                <img
                  src="https://github-readme-stats.vercel.app/api?username=mffkht&show_icons=true&theme=radical"
                  alt="GitHub Stats"
                  className="img-fluid mb-3"
                />
                <img
                  src="https://streak-stats.demolab.com?user=mffkht&theme=radical"
                  alt="GitHub Streak"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="tm-section-3-right">
              <div className="tm-img-container tm-img-container-3"></div>
            </div>
          </div>
        </section>

        {/* === IMAGE GALLERY (React Slick) === */}
        <section className="row tm-section-pb">
          <div className="col-md-12 tm-bg-accent tm-gallery-pad tm-gallery-container mx-auto">
            <h2 className="text-center tm-mb-45">My Project Gallery</h2>
            <Slider {...sliderSettings}>
              {galleryImages.map((img, index) => (
                <div key={index} className="tm-gallery-item">
                  <img src={`img/${img}`} alt={`Gallery ${index + 1}`} />
                  <p className="text-center">Project {index + 1} Showcase</p>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* === CONTACT SECTION === */}
        <section className="row">
          <div className="col-md-7 d-flex tm-contact-left-col">
            <div className="tm-bg-primary tm-contact-left">
              <div className="tm-contact-left-inner">
                <h2 className="text-center tm-mb-40 tm-contact-header"> Get In Touch</h2>
                <p className="tm-line-height-2 mb-5">
                  I’d love to connect! Whether you want to collaborate, ask questions,
                  or just say hello — feel free to reach out.
                </p>
                <div className="mb-2 tm-font-normal">
                  Email:{" "}
                  <a href="mailto:maffiakhateg@gmail.com" className="tm-contact-link">
                    maffiakhateg@gmail.com
                  </a>
                </div>
                <div className="mb-2 tm-font-normal">
                  GitHub:{" "}
                  <a href="https://github.com/mffkht" target="_blank" rel="noreferrer" className="tm-contact-link">
                    github.com/mffkht
                  </a>
                </div>
               
              </div>
            </div>
          </div>

          {/* Contact Form */}
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

        {/* === FOOTER === */}
        <footer className="pt-4 pb-4">
          <p className="text-center tm-text-light-dark">
            © {new Date().getFullYear()} Maffia Khate Guaro 
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
