
import {Link} from "react-router-dom";

function About() {
  return (
    <main className="about-page">
      <section className="about-container">
        <p className="about-eyebrow">
          A LITTLE ABOUT ME
        </p>

        <h1 className="about-title">
          Building with <span>curiosity.</span>
        </h1>

        <div className="about-content">
          <p>
            Hey, I'm Daksh — a B.Tech Information Technology
            student at NIT Kurukshetra who enjoys solving problems
            and turning ideas into working applications.
          </p>

          <p>
            I'm interested in full-stack development, machine
            learning, and generative AI. From building interactive
            web applications to experimenting with deep learning
            and AI-powered tools, I enjoy learning by building
            real projects.
          </p>

          <p>
            I'm continuously improving my data structures and
            algorithms skills while exploring technologies that
            help me build useful, scalable, and thoughtful
            digital experiences.
          </p>
        </div>

        <div className="about-actions">
          <a
            className="about-link about-link-primary"
            href="https://github.com/dakshpokh"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>

          <a
            className="about-link"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>

          <a
            className="resume-button"
              href="/resume.pdf"
              target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="about-divider" />

        <div className="about-explore">
          <span>EXPLORE MORE</span>

          <div className="about-explore-links">
            <Link to="/skills">
              My Skills <span aria-hidden="true">↗</span>
            </Link>

            <Link to="/projects">
              My Projects <span aria-hidden="true">↗</span>
            </Link>

            <Link to="/contact">
              Contact Me <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
