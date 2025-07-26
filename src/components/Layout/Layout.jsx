import { Outlet, useLocation } from "react-router-dom";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import RightSideBar from "../RightSideBar/RightSideBar";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const theme = useSelector((state) => state.theme.theme);
  const location = useLocation();
  const currentPath = location.pathname
    ?.split("/")
    .filter((path) => path !== "");

  return (
    <section
      className={`min-h-screen w-full font-Inter scroll-smooth grid grid-cols-12 items-start animate-fade ${
        theme ? "bg-[#1C1C1C]" : "bg-[#FFFFFF]"
      }`}
    >
      <LeftSideBar />
      <div
        className={`col-span-12 ${
          currentPath[0] !== "orders" ? "xl:col-span-8" : "xl:col-span-10"
        } border-x-[1px] ${
          theme ? "border-x-[#FFFFFF33]" : "border-x-[#1C1C1C1A]"
        } min-h-screen`}
      >
        <Header />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
      {currentPath[0] !== "orders" && <RightSideBar />}
      <ToastContainer />
    </section>
  );
};

export default Layout;
