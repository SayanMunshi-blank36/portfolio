import { FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="my-24" id="experience">
      <h2 className="text-[#f9a87c] font-extrabold text-2xl mb-6 border-b-[0.06rem] w-fit border-b-[#daf7a6] lg:text-5xl">
        My Experience.
      </h2>
      <div className="p-8 bg-[rgba(0,0,0,0.5)] rounded-md shadow-lg">
        <h3 className="text-2xl mb-2 font-bold text-[#f9a87c]">
          Self Employed
        </h3>
        <h4 className="text-xl mb-2 font-black text-[#f9a87cb2]">Freelance</h4>
        <p className="text-xs mb-6">01/2022 - Present</p>
        <h4 className="text-[#daf7a6]">Projects Built:</h4>
        <ul className="p-2">
          <li className="mb-6 text-sm">
            Built a Portfolio Website for the client.{" "}
            <a
              href="https://susovan-jana-portfolio-test.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
          </li>
          <li className="mb-6 text-sm">
            Built a Business Website for a Picnic Spot (Mundhra Gardens).{" "}
            <a
              href="https://mundhra-gardens.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
