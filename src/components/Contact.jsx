const Contact = () => {
  return (
    <div className="pt-[6rem] mb-24" id="contact">
      <h2 className="text-[#f9a87c] font-extrabold text-3xl mb-6 border-b-[0.06rem] w-fit border-b-[#daf7a6] lg:text-5xl">
        Get in Touch.
      </h2>
      <p className="text-center mb-8 lg:text-lg">
        Currently I am looking for opportunities for working on Industry level
        projects. If you are interested in heiring me or working with me on any
        project please get in touch with me. You can use the contact box below
        or reach out to me in any of my social handles.
      </p>
      <div className="md:w-2/3 mx-auto mt-14">
        <form
          action="https://formsubmit.co/sayanmunshi36@gmail.com"
          method="POST"
          className="flex flex-wrap -m-2"
        >
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-[#f9a87c]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-[#f9a87c]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-[#f9a87c]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <input
            type="hidden"
            name="_next"
            value="https://sayanmunshi.netlify.app/#contact"
          />
          <div className="p-2 w-full">
            <button
              type="submit"
              className="flex mx-auto text-[#daf7a6] border-2 border-[#daf7a6] py-2 px-8 focus:outline-none rounded lg:mt-4 text-lg hover:scale-110 transition-all"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
