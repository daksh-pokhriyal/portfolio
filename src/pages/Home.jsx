
function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">
            SOFTWARE DEVELOPER · AI ENTHUSIAST
          </p>

          <h1 className="hero-title">
            CODE.BUILD.DEPLOY
          </h1>

          <p className="hero-subtitle">
            Building thoughtful digital experiences with modern
            web technologies, creative ideas, and artificial intelligence.
          </p>

          <a
            className="resume-button"
            href="/resume.pdf"
            download="Resume.pdf"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 17v4h14v-4" />
            </svg>

            Download Resume
          </a>

          <div className="scroll-hint">
            <span></span>
            Explore my portfolio
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
