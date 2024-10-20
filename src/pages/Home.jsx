import { Helmet } from "react-helmet-async";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactMe from "../components/ContactMe/ContactMe";
import Education from "../components/Education/Education";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/Resume";
import Skills from "../components/Skills/Skills";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - Zahidur Rahman</title>
      </Helmet>
      <div>
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <Resume />
        <ContactMe />
      </div>

      <Footer />
    </>
  );
};

export default Home;
