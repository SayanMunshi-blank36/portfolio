const About = () => {
  return (
    <div
      className="my-24 md:grid md:grid-cols-3 md:gap-4 items-center"
      id="about"
    >
      <div className="col-span-2">
        <h2 className="text-[#f9a87c] font-extrabold text-2xl mb-6 border-b-[0.06rem] w-fit border-b-[#daf7a6] lg:text-5xl">
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
      <div className="profile_img w-60 h-60 rounded-lg border-4 hover:border-0 border-[#daf7a6] mx-auto my-8 transition-all col-span-1"></div>
    </div>
  );
};

export default About;
