const Hamburger = ({ hamburger, setHamburger }) => {
  return (
    <div
      className={`h-full w-full fixed top-0 ${
        hamburger && "sm:-right-1/2 -right-1/2"
      } -right-[80rem] transition-all bg-[#28282b] shadow-2xl z-40 flex flex-col justify-center md:hidden`}
    >
      <ul className="ml-4 sm:ml-16">
        {/* <a href="#home">
          <li
            onClick={(e) => {
              setHamburger((prevVal) => !prevVal);
            }}
            className="my-4 text-[#daf7a6] hover:border-[0.06rem] w-fit hover:border-[#daf7a6] p-4 sm:text-2xl text-xl"
          >
            Home
          </li>
        </a> */}
        <a href="#about">
          <li
            onClick={(e) => {
              setHamburger((prevVal) => !prevVal);
            }}
            className="my-4 text-[#daf7a6] hover:border-[0.06rem] w-fit hover:border-[#daf7a6] p-4 sm:text-2xl text-xl"
          >
            About
          </li>
        </a>
        <a href="#skills">
          <li
            onClick={(e) => {
              setHamburger((prevVal) => !prevVal);
            }}
            className="my-4 text-[#daf7a6] hover:border-[0.06rem] w-fit hover:border-[#daf7a6] p-4 sm:text-2xl text-xl"
          >
            Skills
          </li>
        </a>
        <a href="#projects">
          <li
            onClick={(e) => {
              setHamburger((prevVal) => !prevVal);
            }}
            className="my-4 text-[#daf7a6] hover:border-[0.06rem] w-fit hover:border-[#daf7a6] p-4 sm:text-2xl text-xl"
          >
            Projects
          </li>
        </a>
        <a href="#experience">
          <li
            onClick={(e) => {
              setHamburger((prevVal) => !prevVal);
            }}
            className="my-4 text-[#daf7a6] hover:border-[0.06rem] w-fit hover:border-[#daf7a6] p-4 sm:text-2xl text-xl"
          >
            Experience
          </li>
        </a>
        <a href="#contact">
          <li
            onClick={(e) => {
              setHamburger((prevVal) => !prevVal);
            }}
            className="my-4 text-[#daf7a6] hover:border-[0.06rem] w-fit hover:border-[#daf7a6] p-4 sm:text-2xl text-xl"
          >
            Contact
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Hamburger;
