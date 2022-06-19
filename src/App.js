import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 80) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  });

  return (
    <div>
      <Navbar showScroll={showScroll} />
      <div className="w-11/12 mx-auto relative md:w-[45rem] lg:w-[60rem] xl:w-[65rem]">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
