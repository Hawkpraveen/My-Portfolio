import { AiFillGithub } from "react-icons/ai";
import { FaArrowUpRightFromSquare, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  const socialLinks = [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/praveen-kumar-496255190/",
      icon: <FaLinkedinIn />,
    },
    {
      label: "GitHub",
      link: "https://github.com/Hawkpraveen",
      icon: <AiFillGithub />,
    },
  ];

  return (
    <footer>
      <div className="footer-brand-block">
        <a href="#Home" className="footer-brand" aria-label="Praveen Kumar — back to home">
          Praveen Kumar
        </a>
        <h2>© {new Date().getFullYear()}</h2>
        <p className="footer-tagline">
          Designed with intention. Built with curiosity and code.
        </p>
        <a className="footer-back-top" href="#Home">
          Back to top ↑
        </a>
      </div>

      <div className="footer-details">
        <div>
          <h2>Get in touch</h2>
          <a href="mailto:praveen.pk200109@gmail.com">
            praveen.pk200109@gmail.com
          </a>
          <p>Based in Chennai, India</p>
        </div>
        <div>
          <h2>Around the web</h2>
          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${social.label} profile`}
                title={social.label}
              >
                {social.icon}
                <FaArrowUpRightFromSquare className="footer-social-arrow" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
