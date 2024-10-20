import { Helmet } from "react-helmet-async";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactMe from "../components/ContactMe/ContactMe";
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
        <ContactMe />
      </div>
    </>
  );
};

export default Home;
