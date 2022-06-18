import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-24 text-center mb-8">
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
        <a href="https://twitter.com/blank_36" target="_blank" rel="noreferrer">
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
      <p className="text-center mt-8 text-xs lg:text-base">
        Designed and Built by Sayan Munshi
      </p>
    </div>
  );
};

export default Footer;
