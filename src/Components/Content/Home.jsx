import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaArrowDown, FaArrowUpRightFromSquare, FaCode, FaTerminal } from "react-icons/fa6";
import img from "../../assets/profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";

function Home() {
  useEffect(() => { AOS.init({ duration: 900, once: true, offset: 80 }); }, []);
  const social = [
    { label: "GitHub", link: "https://github.com/Hawkpraveen", icon: <AiFillGithub /> },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/praveen-kumar-496255190/", icon: <FaLinkedinIn /> },
  ];
  return (
    <section id="Home" className="hero-section relative overflow-hidden min-h-[92vh] flex items-center">
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" /><div className="orb orb-two" aria-hidden="true" />
      <div className="section-shell relative z-10 w-full grid lg:grid-cols-[1.15fr_.85fr] gap-14 items-center py-20 lg:py-28">
        <div className="text-center lg:text-left">
          <div className="eyebrow mb-7" data-aos="fade-down"><span className="status-dot" /> PRODUCT ENGINEER · AI & BACKEND SYSTEMS</div>
          <h1 className="hero-title" data-aos="fade-up">I build AI-powered<br className="hidden sm:block" /> products and <span className="gradient-text">reliable systems.</span></h1>
          <p className="hero-intro mt-6" data-aos="fade-up" data-aos-delay="100">Hi, I’m <strong>Praveen Kumar</strong> — a Product Engineer building AI-powered SaaS products, dependable backend systems, and polished full-stack experiences.</p>
          <div className="role-line mt-5" data-aos="fade-up" data-aos-delay="160"><FaTerminal className="text-fuchsia-400" /><span>I work with </span><ReactTyped className="typed-role" strings={["Node.js, Express & Python", "LLM agents, RAG & tool calling", "React & Next.js products", "Reliable APIs & data systems"]} typeSpeed={48} backSpeed={28} backDelay={1400} loop /></div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-9" data-aos="fade-up" data-aos-delay="220">
            <a href="#Projects" className="btn-primary">Explore my work <FaArrowUpRightFromSquare /></a>
            <a href="#Contact" className="btn-secondary">Let’s connect <FaArrowDown /></a>
          </div>
          <div className="hero-socials mt-9 flex justify-center lg:justify-start gap-3" data-aos="fade-up" data-aos-delay="280">
            {social.map((item) => <a key={item.label} href={item.link} target="_blank" rel="noreferrer" aria-label={item.label} className="social-tile"><span>{item.icon}</span><span>{item.label}</span><FaArrowUpRightFromSquare className="social-arrow" /></a>)}
          </div>
          <div className="hero-proof mt-10" data-aos="fade-up" data-aos-delay="320"><div><span className="proof-icon"><FaCode /></span><span><strong>Full-stack mindset</strong><small>UI to API to data</small></span></div><div><span className="proof-icon" aria-hidden="true">✳</span><span><strong>Product focused</strong><small>Useful, maintainable builds</small></span></div></div>
        </div>
        <div className="hero-visual" data-aos="zoom-in" data-aos-duration="1100">
          <div className="visual-ring ring-a"/><div className="visual-ring ring-b"/>
          <div className="profile-frame"><div className="frame-top"><span/><span/><span/><small>praveen.dev</small></div><img src={img} alt="Praveen Kumar" className="hero-profile"/><div className="profile-caption"><span className="caption-mark">PK</span><span><strong>Praveen Kumar</strong><small>Engineer · Builder · Learner</small></span><span className="caption-live">AVAILABLE</span></div></div>
          <div className="floating-chip chip-code"><FaCode /><span>Clean code<br/><small>Thoughtful systems</small></span></div><div className="floating-chip chip-stack"><span className="stack-dot">●</span><span>Build · Learn · Improve</span></div>
        </div>
      </div>
      <a href="#About" className="scroll-cue" aria-label="Scroll to about"><span/> SCROLL TO EXPLORE</a>
    </section>
  );
}
export default Home;
