import Heading from "../Heading/Heading";

const Education = () => {
  return (
    <div
      id="education"
      className="max-w-screen-xl mx-auto p-4 overflow-hidden"
    >
      <Heading headingText={"EDUCATION"} />
      <div className="mt-4">
        <div className="shadow-lg  p-4 rounded-lg bg-slate-50">
          <div>
            <h2 className="text-xl font-bold">
              Bachelor of Science in Electrical and Electronic Engineering
            </h2>
            <p className="text-gray-600">University of Dhaka</p>
            <p className="text-gray-600">2019 - 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
