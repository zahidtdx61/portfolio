import { Link } from "react-scroll";
import NavbarSmDevice from "./NavbarSmDevice";

const Navbar = () => {
  const routes = [
    { name: "About me", path: "about-me" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "projects" },
    { name: "Education", path: "education" },
    { name: "Resume", path: "resume" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <div
      className={`w-full z-50 p-2 lg:py-4 lg:px-8 flex items-center justify-between shadow-lg fixed bg-white`}
    >
      <NavbarSmDevice routes={routes} />

      <div
        className={`w-full gap-4 font-bold lg:flex hidden lg:static justify-center items-center`}
      >
        {routes.map((route, index) => {
          return (
            <ul key={index}>
              <Link
                className="text-xl text-blue-500 hover:border-b-[2px] hover:border-blue-500 font-normal hover:font-semibold hover:text-blue-700 cursor-pointer"
                to={route.path}
                smooth={true}
                duration={500}
              >
                {route.name}
              </Link>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
