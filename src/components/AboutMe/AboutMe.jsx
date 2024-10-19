import HeadingTypeWriter from "../HeadingTypeWriter/HeadingTypeWriter";

const AboutMe = () => {
  const introMsg1 = ["Hi ..."];
  const introMsg2 = ["I am"];
  const introMsg3 = ["Md. Zahidur Rahman"];
  
  return (
    <div
      id="about-me"
      className="h-screen w-full p-0 lg:max-w-screen-xl mx-auto pt-16 flex flex-col lg:flex-row"
    >
      <div className="w-full lg:w-1/2">
        <div>
          <div>
            <div className="text-5xl h-12">
              <HeadingTypeWriter sentences={introMsg1} />
            </div>

            <div className="text-5xl h-12">
              <HeadingTypeWriter sentences={introMsg2} />
            </div>

            <div className="text-5xl h-12">
              <HeadingTypeWriter sentences={introMsg3} />
            </div>
          </div>
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
      <div className="w-full lg:w-1/2 bg-gray-400">Image</div>
    </div>
  );
};

export default AboutMe;
