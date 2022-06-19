import { useState, useEffect } from "react";
import { FaHamburger, FaTimes } from "react-icons/fa";
import Hamburger from "./Hamburger";

const Navbar = ({ showScroll }) => {
  const [hamburger, setHamburger] = useState(false);

  const showHamburger = () => {
    setHamburger((prevVal) => !prevVal);
  };

  useEffect(() => {
    if (hamburger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [hamburger]);

  return (
    <>
      <Hamburger hamburger={hamburger} setHamburger={setHamburger} />
      <nav
        className={`w-full bg-[#28282b] ${
          showScroll && "shadow-lg"
        } z-50 fixed top-0 ${hamburger && "shadow-lg"}`}
      >
        <div className="lg:w-[60rem] xl:w-[65rem] flex items-center justify-between my-4 mx-auto w-11/12">
          <a href="/">
            <img
              src="/logo.png"
              alt="logo"
              className="w-10 hover:rotate-[360deg] transition-all lg:w-12"
            />
          </a>
          {hamburger ? (
            <FaTimes
              className="text-3xl z-50 md:hidden"
              onClick={showHamburger}
            />
          ) : (
            <FaHamburger
              className="text-3xl z-50 md:hidden"
              onClick={showHamburger}
            />
          )}
          <div className="hidden md:block md:w-3/5">
            <ul className="flex items-center justify-between w-full">
              {/* <a href="#home">
                <li className="lg:text-lg text-[#daf7a6] cursor-pointer hover:scale-110 hover:text-[#b8f842] px-4 py-2 transition-all">
                  Home
                </li>
              </a> */}
              <a href="#about">
                <li className="lg:text-lg text-[#daf7a6] cursor-pointer hover:scale-110 hover:text-[#b8f842] px-4 py-2 transition-all">
                  About
                </li>
              </a>
              <a href="#skills">
                <li className="lg:text-lg text-[#daf7a6] cursor-pointer hover:scale-110 hover:text-[#b8f842] px-4 py-2 transition-all">
                  Skills
                </li>
              </a>
              <a href="#projects">
                <li className="lg:text-lg text-[#daf7a6] cursor-pointer hover:scale-110 hover:text-[#b8f842] px-4 py-2 transition-all">
                  Projects
                </li>
              </a>
              <a href="#experience">
                <li className="lg:text-lg text-[#daf7a6] cursor-pointer hover:scale-110 hover:text-[#b8f842] px-4 py-2 transition-all">
                  Experience
                </li>
              </a>
              <a href="#contact">
                <li className="lg:text-lg text-[#daf7a6] cursor-pointer hover:scale-110 hover:text-[#b8f842] px-4 py-2 transition-all">
                  Contact
                </li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
