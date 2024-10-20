import { Helmet } from "react-helmet-async";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactMe from "../components/ContactMe/ContactMe";
import Education from "../components/Education/Education";
import Resume from "../components/Resume/Resume";
import Skills from "../components/Skills/Skills";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <AboutMe />
        <Skills />
        <Education />
        <Resume />
        <ContactMe />
      </div>
    </>
  );
};

export default Home;
