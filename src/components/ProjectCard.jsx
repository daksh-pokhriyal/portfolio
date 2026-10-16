
function ProjectCard({project,index,isExpanded,onToggle}) {
  return (
    <article
      className={`project-card ${isExpanded ? "project-card-expanded" : ""}`}
    >
      <button
        className="project-card-trigger"
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`project-details-${project.id}`}
      >
        <div className="project-card-topline">
          <span className="project-category">
            {project.category}
          </span>

          <span className="project-number">
            {String(index + 1).padStart(2,"0")}
          </span>
        </div>

        <div className="project-card-heading">
          <h2>{project.title}</h2>

          <span
            className={`project-expand-icon ${
              isExpanded ? "is-expanded" : ""
            }`}
            aria-hidden="true"
          >
            {isExpanded ? "−" : "+"}
          </span>
        </div>

        <p className="project-summary">{project.summary}</p>

        <div className="project-card-bottom">
          <div className="project-tags">
            {project.stack.slice(0,3).map((tech) => (
              <span className="project-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <span className="project-view-label">
            {isExpanded ? "Close details" : "Explore project"}
          </span>
        </div>
      </button>

      {isExpanded && (
        <div
          className="project-card-details"
          id={`project-details-${project.id}`}
        >
          <div className="project-details-description">
            <span className="project-details-label">
              ABOUT THE PROJECT
            </span>

            <p>{project.description}</p>
          </div>

          <div className="project-details-highlights">
            <span className="project-details-label">
              KEY FEATURES
            </span>

            <ul>
              {project.highlights.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-full-stack">
            <span className="project-details-label">
              TECHNOLOGIES
            </span>

            <div className="project-tags">
              {project.stack.map((tech) => (
                <span className="project-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.github || project.demo) && (
            <div className="project-card-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
