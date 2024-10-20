const ProjectCard = ({ SiteDetails }) => {
  const { siteName, siteInfo, image, techStack, linkDatas } = SiteDetails;

  return (
    <div className="w-full md:w-[70%} lg:w-[45%] p-4 bg-zinc-100 hover:bg-slate-100 flex flex-col shadow-md">
      <div className="w-full p-2 h-96 mx-auto">
        <img
          src={image}
          alt="project"
          className="h-full w-full object-cover object-center rounded-md"
        />
      </div>

      <div className="mt-4 px-2 flex flex-wrap gap-4">
        {techStack.map((tech, index) => (
          <div
            className="px-4 py-1 bg-zinc-300 text-slate-800 w-fit rounded-md"
            key={index}
          >
            {tech}
          </div>
        ))}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{siteName}</h2>
        <p className="text-gray-600 mt-2">{siteInfo}</p>
      </div>

      <div className="flex flex-wrap gap-4">
        {linkDatas.map((linkData, index) => (
          <div className="mt-4" key={index}>
            <a
              href={linkData.link}
              target="_blank"
              className="bg-slate-500 text-white py-2 px-4 rounded-md hover:bg-slate-600"
            >
              {linkData.text}
            </a>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProjectCard;
