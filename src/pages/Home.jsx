import { Helmet } from "react-helmet-async";
import Part1 from "../components/Parts/Part1";
import Part2 from "../components/Parts/Part2";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <Part1 />
        <Part2 />
      </div>
    </>
  );
};

export default Home;
