import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DashboardRouter = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.theme);
  const currentPath = window.location.pathname
    ?.split("/")
    .filter((path) => path !== "");

  return (
    <div className="md:flex items-center gap-3">
      <p
        onClick={() => navigate("/")}
        className={`cursor-pointer rounded-md p-0.5 text-sm font-normal ${
          theme
            ? "text-[#FFFFFF66] hover:bg-[#FFFFFF1A]"
            : "text-[#1C1C1C66] hover:bg-[#1C1C1C0D]"
        }`}
      >
        Dashboards
      </p>
      <p
        className={`text-sm  font-normal ${
          theme ? "text-[#FFFFFF33]" : "text-[#1C1C1C66]"
        }`}
      >
        /
      </p>
      <p
        className={`text-sm rounded-md p-0.5 font-normal capitalize line-clamp-1 ${
          theme
            ? "text-[#FFFFFF] hover:bg-[#FFFFFF1A]"
            : "text-[#1C1C1C] hover:bg-[#1C1C1C0D]"
        }`}
      >
        {currentPath[0] || "Default"}
      </p>
    </div>
  );
};

export default DashboardRouter;
