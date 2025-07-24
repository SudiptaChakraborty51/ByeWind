import React, { useEffect, useState } from "react";
import { GoSun } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

const Header = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex items-center justify-between border-b-[1px] ${
        theme ? "border-b-[#FFFFFF33]" : "border-b-[#1C1C1C1A]"
      } p-4 z-10 sticky top-0 transition-transform duration-500`}
    >
      {theme ? (
        <GoSun
          onClick={() => dispatch(toggleTheme())}
          size={24}
          className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] transition-transform hover:scale-125 duration-500 ease-in-out"
        />
      ) : (
        <GoSun
          onClick={() => dispatch(toggleTheme())}
          size={24}
          className="text-[#1C1C1C]  p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]  transition-transform hover:scale-125 duration-500 ease-in-out"
        />
      )}
    </div>
  );
};

export default Header;
