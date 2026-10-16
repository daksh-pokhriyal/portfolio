
import {useState} from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [expandedProject,setExpandedProject] = useState(null);

  return (
    <main className="projects-page">
      <div className="projects-shell">
        <header className="projects-intro">
          <p className="projects-eyebrow">
            A SELECTION OF MY WORK
          </p>

          <h1>
            Things I've <span>Built.</span>
          </h1>

          <p className="projects-description">
            Experiments, ideas, and applications built with code
            and curiosity. Explore the details of each project.
          </p>

          <div className="projects-count">
            <span>{String(projects.length).padStart(2,"0")}</span>
            <span>PROJECTS</span>
            <span className="count-line"></span>
          </div>
        </header>

        <section
          className="projects-grid"
          aria-label="Portfolio projects"
        >
          {projects.map((project,index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isExpanded={expandedProject === project.id}
              onToggle={() => {
                setExpandedProject((currentId) =>
                  currentId === project.id ? null : project.id
                );
              }}
            />
          ))}
        </section>

        <p className="projects-footer-note">
          HAVE AN IDEA? LET'S BUILD SOMETHING.
        </p>
      </div>
    </main>
  );
}

export default Projects;
