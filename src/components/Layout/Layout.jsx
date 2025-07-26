import { Outlet } from "react-router-dom";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import RightSideBar from "../RightSideBar/RightSideBar";

const Layout = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <section
      className={`font-Inter scroll-smooth grid grid-cols-12 items-start h-full animate-fade ${
        theme ? "bg-[#1C1C1C]" : "bg-[#FFFFFF]"
      }`}
    >
      <LeftSideBar />
      <div
        className={`col-span-12 xl:col-span-8 border-x-[1px] ${
          theme ? "border-x-[#FFFFFF33]" : "border-x-[#1C1C1C1A]"
        }`}
      >
        <Header />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
      <RightSideBar />
    </section>
  );
};

export default Layout;
