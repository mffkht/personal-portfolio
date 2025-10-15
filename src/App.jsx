import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./App.css";

const App = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const projects = [
    {
      title: "Note Taking App",
      description:
        "A full CRUD web app built using Laravel Breeze and React. Users can create, update, and delete notes.",
      tech: "Laravel, React, MySQL, Tailwind CSS",
      github: "https://github.com/mffkht/note-taking-app",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website showcasing my projects, skills, and background.",
      tech: "React, CSS, GitHub Pages",
      github: "https://github.com/mffkht/portfolio",
    },
    {
      title: "Task Manager",
      description:
        "A simple task-tracking system that helps organize work using a responsive interface.",
      tech: "JavaScript, Node.js, Express, MongoDB",
      github: "https://github.com/mffkht/task-manager",
    },
  ];

  return (
    <>
{/* === SQUARE PINK BUTTON NAVIGATION BAR === */}
<header className="navbar">
  <div className="nav-container">
    
    <nav className="nav-links">
      <a href="#about" className="nav-square">About</a>
      <a href="#techstack" className="nav-square">Tech Stack</a>
      <a href="#projects" className="nav-square">Projects</a>
      <a href="#resume" className="nav-square">Resume</a>
      <a href="#contact" className="nav-square">Contact</a>
    </nav>
  </div>
</header>


      {/* Loader */}
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>

      <div className="container pt-24"> {/* Added padding for nav spacing */}

        {/* === ABOUT SECTION === */}
        <section id="about" className="tm-welcome">
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
              </p>
              <p>
                I’m passionate about bridging the gap between business needs and technology
                solutions — continuously learning, growing, and exploring ways to make
                digital systems smarter and more efficient.
              </p>
              <p>
                Reach me at:{" "}
                <a href="mailto:maffiakhateg@gmail.com" className="tm-contact-link">
                  maffiakhateg@gmail.com
                </a>
              </p>
              <a href="#projects" className="tm-welcome-link tm-font-big">
                View My Projects
              </a>
            </div>
          </div>
        </section>

        <div className="tm-bar-2"></div>

     {/* === SKILLS SECTION === */}
<section id="techstack" className="row tm-section-mb tm-section-2">
  <div className="col-md-12 tm-section-2-inner">
    {/* Left side image (only one) */}
    <div className="tm-section-2-left">
      <div className="tm-img-container tm-img-container-1"></div>
    </div>

    {/* Right side text */}
    <div className="tm-section-2-right tm-bg-primary">
      <div className="tm-section-2-text">
        <h2 className="tm-section-2-header tm-mb-45">Skills</h2>
        <p>
          A visual presentation of the programming languages, frameworks, and tools I am proficient in.
          This section showcases my technical expertise through interactive and engaging elements such as
          skill badges and charts.
        </p>
        <p>
          <b>Languages:</b> JavaScript, PHP, HTML, CSS <br />
          <b>Frameworks & Tools:</b> React, Laravel, Node.js, MySQL, Git, Figma, VS Code <br />
          <b>Other Interests:</b> Data Analytics, UX/UI Design, Project Documentation
        </p>
      </div>
    </div>
  </div>
</section>


       {/* === PROJECTS SECTION === */}
<section id="projects" className="tm-section-mb text-center">
  <h2 className="tm-section-header mb-5">Projects</h2>
  <p className="mb-5">
    A showcase of my technical projects, complete with descriptions, technologies used, 
    and links to GitHub repositories. Visitors can explore the work I have done, 
    understand my approach, and view my coding style.
  </p>

  <Slider {...sliderSettings}>
    {/* === Project 1 === */}
    <div className="tm-project-card">
      <div className="tm-project-content">
        <h3>AppDev1</h3>
        <p>
          A foundational project exploring core web development concepts such as 
          responsive design, modular components, and front-end structure.
        </p>
        <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
        <a
          href="https://github.com/mffkht/appdev1"
          target="_blank"
          rel="noreferrer"
          className="tm-contact-link"
        >
          View on GitHub
        </a>
      </div>
    </div>

    {/* === Project 2 === */}
    <div className="tm-project-card">
      <div className="tm-project-content">
        <h3>AppDev1 Midterm Exam</h3>
        <p>
          A React-based web application demonstrating CRUD functionality, 
          interactive UI design, and modern front-end development techniques.
        </p>
        <p><strong>Technologies:</strong> React, JavaScript, Vite, CSS</p>
        <a
          href="https://github.com/mffkht/appdev1-midterm-exam"
          target="_blank"
          rel="noreferrer"
          className="tm-contact-link"
        >
          View on GitHub
        </a>
      </div>
    </div>

    {/* === Project 3 === */}
    <div className="tm-project-card">
      <div className="tm-project-content">
        <h3>Practical Exam</h3>
        <p>
          A practical assessment project showcasing applied programming logic 
          and front-end design implementation using clean, efficient code.
        </p>
        <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
        <a
          href="https://github.com/mffkht/Practical-exam"
          target="_blank"
          rel="noreferrer"
          className="tm-contact-link"
        >
          View on GitHub
        </a>
      </div>
    </div>
  </Slider>

  <p className="mt-5">
    💻 Explore more on my GitHub:{" "}
    <a
      href="https://github.com/mffkht"
      target="_blank"
      rel="noreferrer"
      className="tm-contact-link"
    >
      github.com/mffkht
    </a>
  </p>
</section>


{/* === RESUME SECTION === */}
<section id="resume" className="tm-bg-primary tm-section-2 tm-section-mb text-center">
  <h2 className="tm-section-2-header tm-mb-35">Resume</h2>
  <p>
    A downloadable PDF version of my professional resume, summarizing my work experience, 
    key accomplishments, and skills. This section provides a quick way for potential employers 
    to review my qualifications.
  </p>
  <div className="mb-2 tm-font-normal">
    <strong>Download Resume: </strong>
    <a
      href="img/Resume.pdf"  // ✅ points to public/Resume.pdf
      target="_blank"
      rel="noreferrer"
      className="tm-contact-link"
    >
      View My Resume (PDF)
    </a>
  </div>
</section>



        {/* === CONTACT SECTION === */}
        <section id="contact" className="row">
          <div className="col-md-7 d-flex tm-contact-left-col">
            <div className="tm-bg-primary tm-contact-left">
              <div className="tm-contact-left-inner">
                <h2 className="text-center tm-mb-40 tm-contact-header">Get In Touch</h2>
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
                  <a
                    href="https://github.com/mffkht"
                    target="_blank"
                    rel="noreferrer"
                    className="tm-contact-link"
                  >
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
                  name="contact_name"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="email"
                  name="contact_email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <textarea
                  rows="6"
                  name="contact_message"
                  className="form-control"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="form-group mb-0">
                <button type="submit" className="btn btn-primary tm-btn-round tm-fl-right">
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
