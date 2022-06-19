import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div
      className="pt-[6rem] md:grid md:grid-cols-3 md:gap-4 items-center"
      id="about"
    >
      <div className="col-span-2">
        <h2 className="text-[#f9a87c] font-extrabold text-3xl mb-6 border-b-[0.06rem] w-fit border-b-[#daf7a6] lg:text-5xl">
          About Me.
        </h2>
        <p className="mb-4 lg:text-lg">
          Hello! My name is Sayan Munshi and I like making things for the web.
          Currently I am pursuing my B.Tech degree on Information Technology
          from the Institute of Enginnering and Management, Kolkata. My interest
          in Web Development started back in 2021. At the very beginning I got
          my hands on{" "}
          <span className="text-[#daf7a6]"> HTML/CSS and JAVASCRIPT </span> and
          from there my journey began.
        </p>
        <p className="mb-4 lg:text-lg">
          Fast forwarding to present day I have learnt a handful of frontend
          technologies such as <span className="text-[#daf7a6]">ReactJS</span>,{" "}
          <span className="text-[#daf7a6]"> NextJS</span>,{" "}
          <span className="text-[#daf7a6]"> TailwindCSS</span>,{" "}
          <span className="text-[#daf7a6]"> Redux</span>,{" "}
          <span className="text-[#daf7a6]"> Redux Toolkit</span>, etc. along
          with a few backend technologies such as{" "}
          <span className="text-[#daf7a6]"> NodeJS</span>,{" "}
          <span className="text-[#daf7a6]"> ExpressJS</span> and
          <span className="text-[#daf7a6]"> MongoDB</span>.
        </p>
        <p className="mb-4 lg:text-lg">
          {" "}
          Currently I am looking for opportunities to showcase my skills on the
          industry level. If you are interested in heiring me or working with
          me, you can cosidering checking my projects and getting in touch
          through my social handels or using the{" "}
          <a
            href="#contact"
            className="text-[#daf7a6] underline hover:no-underline hover:text-white"
          >
            Contact Box
          </a>
          .
        </p>
      </div>
      <div>
        <div className="profile_img w-60 h-60 rounded-lg border-4 hover:border-0 border-[#daf7a6] mx-auto my-12 transition-all col-span-1"></div>
        <div className="flex items-center justify-center">
          <a
            href="https://github.com/SayanMunshi-blank36"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className="mx-4 text-xl lg:text-2xl hover:text-[#daf7a6] transition-all text-[#f9a87c]" />
          </a>
          <a
            href="https://www.instagram.com/sayanmunshi36/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram className="mx-4 text-xl lg:text-2xl hover:text-[#daf7a6] transition-all text-[#f9a87c]" />
          </a>
          <a
            href="https://twitter.com/blank_36"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter className="mx-4 text-xl lg:text-2xl hover:text-[#daf7a6] transition-all text-[#f9a87c]" />
          </a>
          <a
            href="https://www.linkedin.com/in/sayan-munshi-714a401b8/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="mx-4 text-xl lg:text-2xl hover:text-[#daf7a6] transition-all text-[#f9a87c]" />
          </a>
          <a
            href="mailto:sayanmunshi36@gmil.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope className="mx-4 text-xl lg:text-2xl hover:text-[#daf7a6] transition-all text-[#f9a87c]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
