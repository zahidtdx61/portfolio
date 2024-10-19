import { Helmet } from "react-helmet-async";
import AboutMe from "../components/AboutMe/AboutMe";
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
      </div>
    </>
  );
};

export default Home;
