import { Helmet } from "react-helmet-async";
import AboutMe from "../components/AboutMe/AboutMe";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <AboutMe />
      </div>
    </>
  );
};

export default Home;
