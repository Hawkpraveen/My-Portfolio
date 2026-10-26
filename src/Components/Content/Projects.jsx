import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillGithub } from "react-icons/ai";
import {
  FaArrowUpRightFromSquare,
  FaEye,
} from "react-icons/fa6";
import ProjectsList from "../../All_Lists/ProjectsList";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80 });
  }, []);

  return (
    <section id="Projects" className="section-band projects-section">
      <div className="section-shell py-24">
        <header className="section-heading" data-aos="fade-up">
          <div className="eyebrow">PERSONAL PROJECTS</div>
          <h2>
            Ideas turned into{" "}
            <span className="gradient-text">working software.</span>
          </h2>
          <p>
            Independent builds and experiments. Professional product work is
            highlighted separately in my experience.
          </p>
        </header>

        <div className="project-grid">
          {ProjectsList.map((project, index) => (
            <article
              className="project-card"
              key={project.id}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-delay={(index % 3) * 80}
            >
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-image-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} live`}
                  >
                    <FaEye aria-hidden="true" /> Live project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} source code`}
                  >
                    <AiFillGithub aria-hidden="true" /> Source code
                  </a>
                </div>
                <span className="project-number">
                  {String(project.id).padStart(2, "0")}
                </span>
              </div>

              <div className="project-body">
                <div className="project-kicker">FEATURED PROJECT</div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.desc}</p>
                <div className="tag-row">
                  {project.tech.map((technology) => (
                    <span className="tech-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Explore project
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <AiFillGithub aria-hidden="true" /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="all-work-cta" data-aos="fade-up">
          <span>Curious about the experiments behind the scenes?</span>
          <a
            className="btn-secondary"
            href="https://github.com/Hawkpraveen?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Browse all GitHub repositories
            <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
