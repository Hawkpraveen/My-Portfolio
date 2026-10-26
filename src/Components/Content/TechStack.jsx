import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TechStackList from "../../All_Lists/TechStackList";

function TechStack() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="TechStack" className="section-band tech-section">
      <div className="section-shell py-24">
        <header className="section-heading" data-aos="fade-up">
          <div className="eyebrow">TOOLS I USE TO SHIP</div>
          <h2>
            A practical stack for{" "}
            <span className="gradient-text">real products.</span>
          </h2>
          <p>
            Technologies I use across product engineering, backend systems,
            full-stack delivery, and applied AI. The list reflects hands-on
            work and current areas of exploration.
          </p>
        </header>

        <div className="tech-grid">
          {TechStackList.map((category, categoryIndex) => (
            <article
              className="tech-category"
              key={category.title}
              data-aos={categoryIndex % 2 === 0 ? "fade-up" : "fade-down"}
            >
              <h3 className="tech-category-heading">{category.title}</h3>
              <ul className="tech-skill-list">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <li
                      className="tech-skill-pill"
                      key={skill.name}
                      data-aos={skillIndex % 2 === 0 ? "fade-up" : "fade-down"}
                    >
                      <Icon className="tech-skill-icon" aria-hidden="true" />
                      <span>{skill.name}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
