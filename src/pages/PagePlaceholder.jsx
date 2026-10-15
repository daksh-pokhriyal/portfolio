
import {Link} from "react-router-dom";

function PagePlaceholder({title}) {
  return (
    <main className="inner-page">
      <section className="inner-page-content">
        <p className="hero-eyebrow">MY PORTFOLIO</p>
        <h1>{title}</h1>
        <p>
          This section is under construction.
          More details coming soon.
        </p>

        <Link className="resume-button" to="/">
          ← Back to Home
        </Link>
      </section>
    </main>
  );
}

export default PagePlaceholder;
