import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftSideBar from "./components/LeftSideBar";
import Header from "./components/Header";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <>
      <BrowserRouter>
        <section
          className={`font-Inter scroll-smooth grid grid-cols-12 items-start 
          } h-full animate-fade ${theme ? "bg-[#1C1C1C]" : "bg-[#FFFFFF]"}`}
        >
          <LeftSideBar />
          <div
            className={`col-span-12 xl:col-span-8 border-x-[1px] ${
              theme ? "border-x-[#FFFFFF33]" : "border-x-[#1C1C1C1A]"
            }`}
          >
            <Header />
          </div>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
