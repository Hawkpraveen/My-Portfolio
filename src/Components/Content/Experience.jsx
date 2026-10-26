import { useEffect } from "react";
import { FaArrowUpRightFromSquare, FaBriefcase } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const roles = [
  {
    company: "Piqual",
    role: "Senior Associate Product Engineer",
    previousRole: "Associate Full Stack Developer",
    period: "November 2024 — Present",
    type: "AI sales platform · B2B outreach",
    copy: "Joined to build the second version of an AI sales platform for B2B teams, automating email, calling, and LinkedIn outreach. After two promotions, I now lead a team of two engineers and work across the product end to end—from thinking through a feature’s design and building it across React, Node.js, and Python/FastAPI to writing automated tests, deploying on Azure, and supporting it in production. My work spans application APIs, MongoDB data, Redis and BullMQ background jobs, and integrations with services such as Twilio, SendGrid, and Stripe.",
    tags: [
      "React",
      "Node.js",
      "Python",
      "FastAPI",
      "MongoDB",
      "Redis",
      "BullMQ",
      "LangChain / LangGraph",
      "Twilio",
      "SendGrid",
      "Stripe",
      "Azure",
      "Bitbucket",
    ],
  },
  {
    company: "Talentou",
    role: "Full-stack Developer",
    period: "Earlier experience",
    type: "AI-powered recruitment",
    copy: "Built AI agents for an AI-powered recruitment product and developed most of its backend features. My work also included conversational assistant and AI-enabled workflows designed to support talent teams and recruiters.",
    tags: ["Backend development", "AI agents", "Conversational AI", "Recruitment tech"],
  },
];

const piqualProjects = [
  {
    name: "Calling & conversation intelligence",
    copy: "Built the Twilio-powered calling module for B2B outreach, covering call queues, recordings, and transcription so teams could manage calls and review conversations from the platform.",
    tags: ["Twilio", "Call queues", "Recordings", "Transcription"],
  },
  {
    name: "Email delivery infrastructure",
    copy: "Built the SendGrid email delivery infrastructure that supports prospect outreach as part of coordinated sales sequences.",
    tags: ["SendGrid", "Email delivery", "B2B outreach"],
  },
  {
    name: "Credits & billing",
    copy: "Built the Stripe-backed credit and billing system that connects platform usage with customer credits and payments.",
    tags: ["Stripe", "Billing", "Credits"],
  },
  {
    name: "Outreach sequencing",
    copy: "Built scheduled prospect journeys that coordinate email, calls, and LinkedIn steps around each prospect’s schedule, bringing multiple outreach channels into one sequence.",
    tags: ["Scheduling", "Email", "Calling", "LinkedIn"],
  },
  {
    name: "Super admin console",
    copy: "Built the internal super admin console for managing the platform, giving the team a dedicated interface for operational workflows.",
    tags: ["React", "Super admin", "Operations"],
  },
  {
    name: "AI research & sales workflows",
    copy: "Built LangChain and LangGraph workflows to generate and review sales templates, create contact profiles, and research companies. Integrated Bright Data for LinkedIn data workflows and Serper for company research, with prompt-injection detection, input sanitization, and token-usage and AI-cost monitoring.",
    tags: ["LangChain", "LangGraph", "Bright Data", "Serper", "Input safety", "Cost monitoring"],
  },
];

const talentouHighlights = [
  {
    name: "AI agents for recruitment",
    copy: "Built AI agents and conversational workflows for an AI-powered recruitment product, helping bring AI capabilities into the experience for talent teams and recruiters.",
    tags: ["AI agents", "Conversational AI", "Recruitment"],
  },
  {
    name: "Backend feature development",
    copy: "Developed most of the product’s backend features, contributing to the application functionality behind its recruitment workflows.",
    tags: ["Backend", "Full-stack product", "APIs"],
  },
];

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 850, once: true });
  }, []);

  return (
    <section id="Experience" className="section-band experience-section">
      <div className="section-shell py-24">
        <header className="section-heading" data-aos="fade-up">
          <div className="eyebrow">WHAT I’VE BEEN BUILDING</div>
          <h2>
            Experience that connects{" "}
            <span className="gradient-text">code to product.</span>
          </h2>
          <p>
            Product environments where I’ve worked across backend systems,
            AI-enabled workflows, and the details that make a feature useful.
          </p>
        </header>

        <div className="experience-list">
          {roles.map((role, index) => (
            <article
              className="experience-card"
              key={role.company}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="experience-mark" aria-hidden="true">
                <FaBriefcase />
              </div>
              <div className="experience-content">
                <div className="experience-top">
                  <div>
                    <p className="experience-type">{role.type}</p>
                    <h3>{role.role}</h3>
                    <h4>{role.company} · {role.period}</h4>
                  </div>
                  <span className="experience-index">
                    0{index + 1}
                  </span>
                </div>
                {role.previousRole && (
                  <div className="experience-progression">
                    <span>Joined as</span>
                    <strong>{role.previousRole}</strong>
                    <span className="progression-arrow" aria-hidden="true">→</span>
                    <strong>{role.role}</strong>
                    <span className="promotion-badge">2 promotions</span>
                  </div>
                )}
                <p className="experience-copy">{role.copy}</p>
                <div className="tag-row">
                  {role.tags.map((tag) => (
                    <span className="tech-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="professional-work" data-aos="fade-up">
          <div className="professional-work-heading">
            <div>
              <div className="eyebrow">PROFESSIONAL PROJECTS · PIQUAL</div>
              <h3>Product work built for real sales teams.</h3>
            </div>
            <p>
              Selected product areas I built as part of the Piqual platform—not
              personal portfolio projects.
            </p>
          </div>
          <div className="professional-project-grid">
            {piqualProjects.map((project, index) => (
              <article
                className="professional-project-card"
                key={project.name}
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              >
                <span className="professional-project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4>{project.name}</h4>
                <p>{project.copy}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span className="tech-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="professional-work" data-aos="fade-up">
          <div className="professional-work-heading">
            <div>
              <div className="eyebrow">TALENTOU · AI RECRUITMENT</div>
              <h3>AI agents backed by product engineering.</h3>
            </div>
            <p>
              Highlights from my work building AI agents and most of the
              backend features for the recruitment product.
            </p>
          </div>
          <div className="professional-project-grid talentou-project-grid">
            {talentouHighlights.map((highlight, index) => (
              <article
                className="professional-project-card"
                key={highlight.name}
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              >
                <span className="professional-project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4>{highlight.name}</h4>
                <p>{highlight.copy}</p>
                <div className="tag-row">
                  {highlight.tags.map((tag) => (
                    <span className="tech-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="profile-links" data-aos="fade-up">
          <a
            href="https://www.linkedin.com/in/praveen-kumar-496255190/"
            target="_blank"
            rel="noreferrer"
          >
            Explore my LinkedIn profile
            <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
          <span>
            For the latest role details, endorsements, and professional updates.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Experience;
