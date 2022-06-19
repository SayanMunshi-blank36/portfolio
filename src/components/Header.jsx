const Header = () => {
  return (
    <div className="mt-32 md:mt-24" id="home">
      <p className="text-[#daf7a6] mb-2 lg:text-lg">Hi, I am</p>
      <h1 className="text-[#f9a87c] font-black text-5xl mb-2 lg:text-7xl">
        Sayan Munshi.
      </h1>
      <h2 className="text-[#f9a87cb2] font-black text-4xl lg:text-6xl mb-12">
        I like to craft beautiful frontend for the Web.
      </h2>
      <p className="lg:text-2xl md:text-xl">
        I am a design minded{" "}
        <span className="text-[#daf7a6]">Frontend Developer</span> based on
        Kolkata, India. I like building solid and scalable frontend products
        with great user experience. I like to write clean and elegant code.
      </p>
      <a
        href="http://localhost:3000/SayanResume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn my-16 lg:mt-8 lg:text-xl hover:scale-110 transition-all lg:py-3 rounded-md text-lg px-8 py-2 border-2 border-[#daf7a6] text-[#daf7a6]">
          My Resume!
        </button>
      </a>
    </div>
  );
};

export default Header;
