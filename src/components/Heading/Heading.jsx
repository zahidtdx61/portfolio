const Heading = ({ headingText }) => {
  return (
    <div className="w-full flex justify-center">
      <h1 className="w-fit text-5xl font-bold text-center mt-16 pb-2 px-4 border-b-[3px]">{headingText}</h1>
    </div>
  );
};

export default Heading;
