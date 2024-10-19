const AboutMe = () => {
  return (
    <div id="about-me" className="h-screen w-full lg:max-w-screen-xl mx-auto pt-16 flex flex-col lg:flex-row">
      <div className="w-1/2">
        <div className="text-4xl">
          Hi... &nbsp; I am <br /> Md. Zahidur Rahman
        </div>
        <div className="mt-8 text-xl">
          Dedicated Full Stack developer with a passion for crafting innovative
          web applications. Skilled in building scalable, user-friendly
          solutions.
        </div>
        <div className="mt-8 text-lg">
          <p>
            I am an Electrical and Electronics Engineering (EEE) student with a
            deep passion for programming. My curiosity and drive to explore the
            tech world led me to dive into full-stack development, where I honed
            my skills in the Full stack development (MongoDB, Express.js, React,
            Node.js, Typescript, MySQL, PostgreSQL). In addition to web
            development, I am highly interested in competitive programming,
            where I focus on sharpening my problem-solving abilities.
          </p>
          <p className="mt-4">
            I continuously work on improving my understanding of Data Structures
            and Algorithms (DSA), which helps me tackle challenges in both
            development and algorithmic thinking. Whether it’s building
            efficient applications or solving complex coding problems, I am
            always eager to learn and grow in the world of tech.
          </p>
        </div>
      </div>
      <div className="w-1/2 bg-gray-400">
        Image
      </div>
    </div>
  );
};

export default AboutMe;
