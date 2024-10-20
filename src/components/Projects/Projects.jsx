import Heading from "../Heading/Heading";
import ProjectCard from "./ProjectCard";
import image1 from "/project1.png";
import image2 from "/project2.png";
import image3 from "/project3.png";

const Projects = () => {
  const AllSiteDetails = [
    {
      siteName: "Buzz Forums",
      siteInfo:
        "This is a forum website where users can post their blogs and get feedback from other users.",
      image: image1,
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
        "Firebase",
        "REST API",
      ],
      linkDatas: [
        {
          link: "https://buzz-forums.vercel.app/",
          text: "View Project",
        },
        {
          link: "https://github.com/zahidtdx61/buzz-forums-client",
          text: "Github Client Repo",
        },
        {
          link: "https://github.com/zahidtdx61/burr-forums-server",
          text: "Github Server Repo",
        },
      ],
    },
    {
      siteName: "Share and Savor",
      siteInfo:
        "This is a web application to link surplus food donors with those in need.",
      image: image2,
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "JWT",
        "REST API",
      ],
      linkDatas: [
        {
          link: "https://share-and-savor.vercel.app/",
          text: "View Project",
        },
        {
          link: "https://github.com/zahidtdx61/Share-and-Savor-Frontend",
          text: "Github Client Repo",
        },
        {
          link: "https://github.com/zahidtdx61/Share-and-Savor-Backend",
          text: "Github Server Repo",
        },
      ],
    },
    {
      siteName: "Crestline Properties",
      siteInfo:
        "This is a property listing web application where users can find properties for rent or purchase",
      image: image3,
      techStack: ["React", "MongoDB", "Tailwind CSS", "JWT", "Firebase"],
      linkDatas: [
        {
          link: "https://crestline-properties.vercel.app/",
          text: "View Project",
        },
        {
          link: "https://github.com/zahidtdx61/Crestline-Properties",
          text: "Github Repo",
        },
      ],
    },
  ];

  return (
    <div id="projects" className="max-w-screen-xl mx-auto p-4  overflow-hidden">
      <Heading headingText="Projects" />
      <div className="mt-8 flex flex-wrap mx-auto w-full justify-between gap-8">
        {/* cards */}
        {AllSiteDetails.map((SiteDetails, index) => (
          <ProjectCard SiteDetails={SiteDetails} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
