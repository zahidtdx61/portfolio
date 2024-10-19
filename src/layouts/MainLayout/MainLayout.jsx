import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="w-full h-20">
        <Navbar />
      </div>
      <div className="min-h-svh">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
