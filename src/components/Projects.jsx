import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="my-24" id="projects">
      <h2 className="text-[#f9a87c] lg:text-5xl font-extrabold text-2xl mb-6 border-b-[0.06rem] w-fit border-b-[#daf7a6]">
        Few Things I Built.
      </h2>
      <p className="mb-12 lg:text-lg">
        A few of my projects are displayed below.
      </p>
      <div>
        <div className="h-fit mb-16 p-6 shadow-2xl rounded-md project-1 mx-auto">
          <p className="bg-transparent text-sm text-[#daf7a6] mb-2">
            Featured Project
          </p>
          <h3 className="bg-transparent hover:underline transition-all text-2xl font-bold text-[#daf7a6] mb-6">
            <a
              href="https://anime-fullstack-blog-frontend.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Anilog
            </a>
          </h3>
          <p className="mb-4 bg-transparent">
            A blog web app for otaku's. It is a{" "}
            <span className="text-[#daf7a6]">fullstack </span> blog web app made
            using NextJS and Strapi HeadlessCMS. Anilog features reviews and
            discussions of all the latest anime and manga.
          </p>
          <p className="font-semibold text-[#daf7a6] mb-3 bg-transparent">
            NextJs | Strapi | Tailwind CSS | Daisy UI
          </p>
          <p className="flex bg-transparent">
            <a
              href="https://anime-fullstack-blog-frontend.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent"
            >
              <FaExternalLinkAlt className="mr-4 hover:text-[#daf7a6] bg-transparent" />
            </a>
            <a
              href="https://github.com/SayanMunshi-blank36/Anime_Blog_FullStack"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent"
            >
              <FiGithub className="mr-4 hover:text-[#daf7a6] bg-transparent" />
            </a>
          </p>
        </div>
        <div className="h-fit mb-16 p-6 shadow-2xl rounded-md project-2 mx-auto">
          <p className="bg-transparent text-sm text-[#daf7a6] mb-2">
            Featured Project
          </p>
          <h3 className="bg-transparent hover:underline transition-all text-2xl font-bold text-[#daf7a6] mb-6">
            <a
              href="https://pokedex-by-blank.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Pokedex
            </a>
          </h3>
          <p className="mb-4 bg-transparent">
            A Pokemon database app made using the{" "}
            <span className="text-[#daf7a6]">POKEAPI</span> as the REST API,
            ReactJS is used for the frontend along with vanilla CSS.
          </p>
          <p className="font-semibold text-[#daf7a6] mb-3 bg-transparent">
            ReactJs | CSS | REST API
          </p>
          <p className="flex bg-transparent">
            <a
              href="https://pokedex-by-blank.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent"
            >
              <FaExternalLinkAlt className="mr-4 hover:text-[#daf7a6] bg-transparent" />
            </a>
            <a
              href="https://github.com/SayanMunshi-blank36/PokeDex"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent"
            >
              <FiGithub className="mr-4 hover:text-[#daf7a6] bg-transparent" />
            </a>
          </p>
        </div>
        <div className="h-fit mb-16 p-6 shadow-2xl rounded-md project-3 mx-auto">
          <p className="bg-transparent text-sm text-[#daf7a6] mb-2">
            Featured Project
          </p>
          <h3 className="bg-transparent hover:underline transition-all text-2xl font-bold text-[#daf7a6] mb-6">
            <a
              href="https://mernappsayan.herokuapp.com/login"
              target="_blank"
              rel="noreferrer"
            >
              GoalSetter
            </a>
          </h3>
          <p className="mb-4 bg-transparent">
            A <span className="text-[#daf7a6]">Fullstack MERN</span> app made
            using ReactJS, Node JS, Express JS, MongoDB along with Redux
            Toolkit. GoalSetter help the users to keep track of their goals. It
            showcases complete <span className="text-[#daf7a6]">CRUD</span>{" "}
            functions.
          </p>
          <p className="font-semibold text-[#daf7a6] mb-3 bg-transparent">
            ReactJs | Node JS | Express JS | MongoDB | Redux
          </p>
          <p className="flex bg-transparent">
            <a
              href="https://mernappsayan.herokuapp.com/login"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent"
            >
              <FaExternalLinkAlt className="mr-4 hover:text-[#daf7a6] bg-transparent" />
            </a>
            <a
              href="https://github.com/SayanMunshi-blank36/GoalSetter"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent"
            >
              <FiGithub className="mr-4 hover:text-[#daf7a6] bg-transparent" />
            </a>
          </p>
        </div>
        <div className="h-fit mb-16 p-6 shadow-2xl rounded-md project-4 mx-auto">
          <p className="bg-transparent text-sm text-[#daf7a6] mb-2">
            Featured Project
          </p>
          <h3 className="bg-transparent text-2xl hover:underline transition-all font-bold text-[#daf7a6] mb-6">
            <a
              href="https://sayan-munshi-blogs.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Sayan Munshi: Personal Blog
            </a>
          </h3>
          <p className="mb-4 bg-transparent">
            A personal blog web app. It is a{" "}
            <span className="text-[#daf7a6]">fullstack </span> blog web app made
            using NextJS and Strapi HeadlessCMS. In this blogging website I
            share about my experiences on different matters.
          </p>
          <p className="font-semibold text-[#daf7a6] mb-3 bg-transparent">
            NextJs | Strapi | Tailwind CSS | Daisy UI
          </p>
          <p className="flex bg-transparent">
            <a
              href="https://sayan-munshi-blogs.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent"
            >
              <FaExternalLinkAlt className="mr-4 hover:text-[#daf7a6] bg-transparent" />
            </a>
            <a
              href="https://github.com/SayanMunshi-blank36/personal_blog"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent"
            >
              <FiGithub className="mr-4 hover:text-[#daf7a6] bg-transparent" />
            </a>
          </p>
        </div>
      </div>
      <a
        href="https://github.com/SayanMunshi-blank36"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn mb-16 rounded-md text-lg px-8 py-2 border-2 border-[#daf7a6] text-[#daf7a6] hover:scale-110 transition-all">
          View More
        </button>
      </a>
    </div>
  );
};

export default Projects;
