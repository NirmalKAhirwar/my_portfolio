const Portfolio = () => {
  return (
    <section id="home" className="text-center py-10">
      <div>
        <img
          src="/image/avatar.png"
          alt="Nirmal K. Ahirwar"
          className="mx-auto rounded-full w-48 h-48 object-cover mb-8 border-4 border-slate-600"
        />
      </div>
      {/* <Typewriter text="Hi, I'm Nirmal Kumar Ahirwar 👋" cursor={false} /> */}
      <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
        <p className="mr-1">Hi, I'm Nirmal</p>
        <span className="animate-wave inline-block text-4xl">👋</span>
      </h1>
      <h2 className="text-2xl font-semibold mb-4">
        Software Developer / Machine Learning Engineer
      </h2>
      <div className="max-w-3xl mx-auto px-2 mb-6 text-white rounded-lg shadow-md">
        <p className="text-white ">
          Welcome to my portfolio! I am Nirmal Kumar Ahirwar, a dedicated
          software developer with a strong background in
          <strong> M.E.R.N Stack</strong> and <strong>Machine Learning</strong>,
          specializing in Full-Stack development.
        </p>
        <h2 className="mt-6 text-2xl font-semibold text-white">My Mission</h2>
        <p className="mt-2 text-white ">
          My goal is to advance my career while participating in inspiring
          projects that push the boundaries of technology. I am passionate about
          collaborating with others to shape the future of software development,
          creating applications that not only meet user needs but also inspire
          and engage.
        </p>
      </div>{" "}
      <div className="flex justify-center space-x-4">
        <a
          href="#projects"
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          My Projects
        </a>
        <a
          href="#contact"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
