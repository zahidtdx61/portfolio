const Skill = ({ image }) => {
  return (
    <div className="h-32 w-32">
      <img
        src={image}
        alt="c++"
        className="h-full w-full rounded-sm object-center object-contain"
      />
    </div>
  );
};

export default Skill;
