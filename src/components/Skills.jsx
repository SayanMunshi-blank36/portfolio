const Skills = () => {
  return (
    <div className="pt-[6rem]" id="skills">
      <h2 className="text-[#f9a87c] lg:text-5xl font-extrabold text-2xl mb-6 border-b-[0.06rem] w-fit border-b-[#daf7a6]">
        Techs I Use.
      </h2>
      <p className="mb-6 lg:text-xl">
        Learning Web Development for the past one and a half years, I have
        learned a handful of technologies. They are listed below:
      </p>
      <div className="grid grid-cols-5 mt-6 lg:mt-8 lg:gap-8 gap-6 mx-4 md:mx-10 lg:mx-32">
        <img
          src="/html-5.png"
          alt="html"
          className="w-12 lg:w-16 hover:-translate-y-2 transition-all cursor-pointer"
        />
        <img
          src="/css-3.png"
          alt="css"
          className="w-12 lg:w-16 hover:-translate-y-2 transition-all cursor-pointer"
        />
        <img
          src="/js.jpg"
          alt="js"
          className="w-12 lg:w-16 hover:-translate-y-2 transition-all cursor-pointer"
        />
        <img
          src="/react.png"
          alt="react"
          className="w-12 lg:w-16 hover:-translate-y-2 transition-all cursor-pointer"
        />
        <img
          src="/logo-next.png"
          alt="next"
          className="w-12 lg:w-16 hover:-translate-y-2 transition-all cursor-pointer"
        />
        <img
          src="/Tailwind_CSS_Logo.png"
          alt="TailwindCss"
          className="w-12 lg:w-16 hover:-translate-y-2 transition-all cursor-pointer"
        />
        <img
          src="/redux_logo.png"
          alt="Redux"
          className="w-12 lg:w-16 hover:-translate-y-2 transition-all cursor-pointer"
        />
        <img
          src="/node_js.png"
          alt="NodeJs"
          className="w-12 lg:w-16 hover:-translate-y-2 transition-all cursor-pointer"
        />
        <img
          src="/express.png"
          alt="ExpressJs"
          className="w-12 lg:w-16 hover:-translate-y-2 transition-all cursor-pointer"
        />
        <img
          src="/mongoDB.png"
          alt="mongoDB"
          className="w-7 hover:-translate-y-2 transition-all cursor-pointer"
        />
        <img
          src="/strapi_logo.png"
          alt="Strapi"
          className="w-12 lg:w-16 hover:-translate-y-2 transition-all cursor-pointer"
        />
        <img
          src="/figma_logo.png"
          alt="Figma"
          className="w-12 lg:w-16 hover:-translate-y-2 transition-all cursor-pointer"
        />
        <img
          src="/git_logo.png"
          alt="Git"
          className="w-12 lg:w-16 hover:-translate-y-2 transition-all cursor-pointer"
        />
        <img
          src="/github.png"
          alt="GitHub"
          className="w-12 lg:w-16 hover:-translate-y-2 transition-all cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Skills;
