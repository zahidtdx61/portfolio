import { Link } from "react-scroll";

const Footer = () => {
  const routes = [
    { name: "About me", path: "about-me" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "projects" },
    { name: "Education", path: "education" },
    { name: "Resume", path: "resume" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <div className='w-full bg-slate-300 p-8'>
      <div>
        <div className="text-center text-slate-900 text-2xl">
          Md. Zahidur Rahman
        </div>
        <div className="flex gap-4 flex-wrap justify-center p-4">
        {routes.map((route, index) => {
          return (
            <ul key={index}>
              <Link
                className="text-blue-500 hover:border-blue-500 font-normal hover:font-semibold hover:text-blue-700 cursor-pointer"
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
        <p className='text-center text-gray-600'>
          &copy; 2024 Zahidur Rahman. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer