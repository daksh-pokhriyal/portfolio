
import techStack from "../data/techStack";

function TechStack() {
  return (
    <section className="tech-stack-section">
      <div className="tech-stack-heading">
        <h2>TECHNICAL STACK</h2>
        <span></span>
      </div>

      <div className="tech-stack-grid">
        {techStack.map((category) => (
          <div
            key={category.id}
            className={`tech-stack-category tech-stack-category--${category.layout}`}
          >
            <h3>{category.title}</h3>

            <div className="tech-stack-items">
              {category.items.map((item) => (
                <span className="tech-stack-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
