import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Content/Home";
import About from "./Components/Content/About";
import TechStack from "./Components/Content/TechStack";
import Projects from "./Components/Content/Projects";
import Experience from "./Components/Content/Experience";
import GitHubShowcase from "./Components/Content/GitHubShowcase";
import Contact from "./Components/Content/Contact";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import { RotatingTriangles } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const loadingTimeout = window.setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => window.clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-slate-900 min-h-screen flex justify-center items-center">
          <RotatingTriangles
            height={100}
            width={100}
            radius={5}
            color="#d946ef"
            ariaLabel="Rotating-Triangles"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <GitHubShowcase />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
