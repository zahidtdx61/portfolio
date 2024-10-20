import HeadingTypeWriter from "../HeadingTypeWriter/HeadingTypeWriter";
import profileImage from "/profile-image.jpg";

const AboutMe = () => {
  // const introMsg1 = ["Hi ..."];
  // const introMsg2 = ["I am"];
  const introMsg3 = ["Md. Zahidur Rahman"];

  return (
    <div
      id="about-me"
      className="w-full p-6 lg:p-2 lg:max-w-screen-xl mx-auto pt-20 lg:pt-24"
    >
      <div className="w-full lg:w-1/2">
        <div>
          <div className="mb-16 lg:mb-4">
            <div className="text-5xl h-12">
              {/* <HeadingTypeWriter sentences={introMsg1} /> */}
              Hi ...
            </div>

            <div className="text-5xl h-12">
              {/* <HeadingTypeWriter sentences={introMsg2} /> */}
              I am
            </div>

            <div className="text-5xl h-12">
              <HeadingTypeWriter sentences={introMsg3} />
            </div>

            <div className="mt-12 lg:mt-4 text-4xl font-semibold text-slate-700">
              I am a Full Stack Developer
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
        <div className="w-full lg:w-1/2 mt-8 text-lg">
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

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="max-w-[200px] lg:max-w-[300px]">
            <img
              src={profileImage}
              alt="profile-pic"
              className="h-fit w-fit object-center rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
