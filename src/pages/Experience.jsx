
import TechStack from "../components/TechStack";

function Experience() {
  return (
    <main className="experience-page">
      <div className="experience-content">
        <header className="experience-intro">
          <p className="experience-eyebrow">
            SKILLS & CAPABILITIES
          </p>

          <h1>
            What I <span>Work With.</span>
          </h1>

          <p>
            The technologies and tools I use to build web
            applications, explore artificial intelligence,
            and turn ideas into working projects.
          </p>
        </header>

        <TechStack />
      </div>
    </main>
  );
}

export default Experience;
