import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaArrowUpRightFromSquare,
  FaBrain,
  FaGraduationCap,
  FaLayerGroup,
  FaLightbulb,
  FaSchool,
  FaServer,
} from "react-icons/fa6";
import Resume from "../../assets/Resume.pdf";

const education = [
  {
    title: "B.Tech in Information Technology",
    institution: "Manakula Vinayagar Institute of Technology",
    period: "2019 — 2023",
    result: "CGPA 8.7",
    icon: FaGraduationCap,
  },
  {
    title: "Higher Secondary",
    institution: "A.K.T. Higher Secondary School",
    period: "2018 — 2019",
    result: "69%",
    icon: FaSchool,
  },
  {
    title: "SSLC",
    institution: "Mount Park Higher Secondary School",
    period: "2016 — 2017",
    result: "93.2%",
    icon: FaSchool,
  },
];

const courses = [
  {
    title: "MERN Stack Development",
    provider: "GUVI Geek Network",
    period: "2024",
    link: "https://drive.google.com/file/d/1PZojXwEKdAM3rXwlzJTz1VmWk_h-I4LJ/view?usp=drive_link",
  },
  {
    title: "Data Science",
    provider: "Besant Technologies, Chennai",
    period: "2023 — 2024",
    link: "https://drive.google.com/file/d/1T_cQxr3FFa4SUAJHIupZpDw1q4fdvtIw/view?usp=drive_link",
  },
];

const certificates = [
  {
    title: "Python Basics",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/204a17304a0c",
  },
  {
    title: "Java Basics",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/cbc8a0f5d287",
  },
  {
    title: "JavaScript Essentials 1",
    provider: "Cisco Networking Academy",
    link: "https://drive.google.com/file/d/10iLZYbA7Cdy2Z3Ui3BC4EratPk_4z8Sm/view",
  },
  {
    title: "TalentNext: Java Full Stack",
    provider: "Wipro",
    link: "https://drive.google.com/file/d/1_H2eRxu3N7dgt889kw3ubaMDbIRMO8mt/view",
  },
  {
    title: "IT Support",
    provider: "Google",
    link: "https://drive.google.com/file/d/1cdiZqjUDbobAE2oJkBA70GRdnyOqz4Ut/view",
  },
  {
    title: "Machine Learning",
    provider: "Great Learning",
    link: "https://drive.google.com/file/d/1B5PeIwj0YRzdNH47cPRWyqiqKp2U0mko/view",
  },
];

const strengths = [
  {
    title: "Backend & systems",
    copy: "APIs, data models, background jobs, caching, and reliable integrations.",
    icon: FaServer,
  },
  {
    title: "Applied AI",
    copy: "LLM features, agent workflows, retrieval, tool calling, and evaluation.",
    icon: FaBrain,
  },
  {
    title: "Product delivery",
    copy: "Taking ideas through implementation, iteration, and user-facing details.",
    icon: FaLayerGroup,
  },
];

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section id="About" className="section-band about-section">
        <div className="section-shell py-24">
          <header className="section-heading" data-aos="fade-up">
            <div className="eyebrow">ABOUT ME</div>
            <h2>
              Engineering with a{" "}
              <span className="gradient-text">product mindset.</span>
            </h2>
            <p>
              I build useful software by connecting thoughtful engineering with
              the needs of the people using it.
            </p>
          </header>

          <div className="about-layout">
            <article className="about-story" data-aos="fade-right">
              <span className="eyebrow">A LITTLE CONTEXT</span>
              <h3>From a clear problem to a dependable product.</h3>
              <p>
                I’m Praveen Kumar, a Product Engineer working across
                backend engineering, full-stack development, and AI-powered
                applications. My background is in Information Technology, and
                I enjoy turning complex requirements into software that feels
                clear and useful.
              </p>
              <p>
                I enjoy building products from the ground up and seeing them
                used in production. My work spans both the system behind a
                feature and the interface in front of it—from REST APIs, data
                models, and asynchronous workflows to user-facing product
                experiences.
              </p>
              <p>
                I like to think through the design before building, write
                automated tests for the work I ship, and stay involved through
                deployment and production support. Building AI features for
                real users has also taught me that the model is only one part
                of the system: input sanitization, prompt-injection detection,
                and monitoring token usage and AI costs matter too. I care
                about software that holds up when customers depend on it—not
                just a prototype that works once.
              </p>
              <div className="about-current-focus">
                <span className="about-focus-icon">
                  <FaLightbulb aria-hidden="true" />
                </span>
                <span>
                  <strong>Currently exploring</strong>
                  <small>
                    ResearchPilot — an independent AI research and
                    decision-support agent in development.
                  </small>
                </span>
              </div>
              <a
                className="btn-secondary about-resume"
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
              >
                View résumé <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            </article>

            <div className="about-strengths">
              {strengths.map((strength, index) => {
                const Icon = strength.icon;
                return (
                  <article
                    className="about-strength-card"
                    key={strength.title}
                    data-aos={index % 2 === 0 ? "fade-left" : "fade-up"}
                  >
                    <span className="about-strength-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{strength.title}</h3>
                      <p>{strength.copy}</p>
                    </div>
                  </article>
                );
              })}
              <div className="about-education-note" data-aos="fade-up">
                <span>EDUCATION</span>
                <strong>B.Tech · Information Technology</strong>
                <small>Manakula Vinayagar Institute of Technology · CGPA 8.7</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Education" className="section-band education-section">
        <div className="section-shell py-24">
          <header className="section-heading" data-aos="fade-up">
            <div className="eyebrow">EDUCATION & LEARNING</div>
            <h2>
              Strong foundations.{" "}
              <span className="gradient-text">Always learning.</span>
            </h2>
            <p>
              Formal study, focused courses, and certifications that support
              the work I do today.
            </p>
          </header>

          <div className="education-layout">
            <div className="education-panel" data-aos="fade-right">
              <h3 className="education-panel-title">Education</h3>
              <div className="education-list">
                {education.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <article
                      className="education-card"
                      key={item.title}
                      data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                    >
                      <span className="education-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <div>
                        <div className="education-card-heading">
                          <h4>{item.title}</h4>
                          <span>{item.period}</span>
                        </div>
                        <p>{item.institution}</p>
                        <small>{item.result}</small>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="education-panel" data-aos="fade-left">
              <h3 className="education-panel-title">Courses</h3>
              <div className="education-list">
                {courses.map((course, index) => (
                  <a
                    className="course-card"
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={course.title}
                    data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                  >
                    <span>
                      <strong>{course.title}</strong>
                      <small>{course.provider}</small>
                    </span>
                    <span className="course-meta">
                      {course.period}
                      <FaArrowUpRightFromSquare aria-hidden="true" />
                    </span>
                  </a>
                ))}
              </div>

              <h3 className="education-panel-title certificate-heading">
                Certificates
              </h3>
              <div className="certificate-list">
                {certificates.map((certificate, index) => (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-card"
                    key={certificate.title}
                    data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                  >
                    <span>{certificate.title}</span>
                    <small>{certificate.provider}</small>
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
