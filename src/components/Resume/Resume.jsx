import Heading from "../Heading/Heading";

const Resume = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1MiQSPoU2ti3mSiZwdHs5tjEA5rmipOYo/view?usp=drive_link";

  return (
    <div
      id="resume"
      className="max-w-screen-xl mx-auto p-4  overflow-hidden"
    >
      <Heading headingText={"RESUME"} />
      <div className="mt-4 w-full flex justify-center">
        <div>
          <a
            target={"_blank"}
            href={resumeLink}
            rel="noreferrer"
            className="text-center block mt-3 text-lg font-semibold text-blue-500 hover:text-blue-700"
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
