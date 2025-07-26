import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PiPlus, PiFunnelSimple, PiArrowsDownUp } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import OrderTable from "./OrderTable";

const Orders = () => {
  const theme = useSelector((state) => state.theme.theme);
  const [state, setState] = useState({
    searchedOrder: "",
    isSortByStatus: false,
  });

  const handleSearchedOrder = (e) => {
    setState((prev) => {
      return {
        ...prev,
        searchedOrder: e.target.value,
      };
    });
  };

  const handleSortByStatus = () => {
    setState((prev) => ({
      ...prev,
      isSortByStatus: !prev?.isSortByStatus,
    }));
  };

  return (
    <main className="grid gap-y-5 animate-fade">
      <h2
        className={`text-sm font-semibold ${
          theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
        }`}
      >
        Order List
      </h2>
      <div
        className={`${
          theme ? "bg-[#FFFFFF1A]" : "bg-[#F7F9FB]"
        } flex items-center justify-between p-2 rounded-lg`}
      >
        <div className="flex items-center gap-4">
          <PiPlus
            size={24}
            strokeWidth={1.5}
            className={`${
              theme
                ? "text-[#FFFFFF] hover:bg-[#FFFFFF1A]"
                : "text-[#1C1C1C] hover:bg-[#1C1C1C0D]"
            } p-1 rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out`}
          />
          <PiFunnelSimple
            size={24}
            strokeWidth={1.5}
            className={`${
              theme
                ? "text-[#FFFFFF] hover:bg-[#FFFFFF1A]"
                : "text-[#1C1C1C] hover:bg-[#1C1C1C0D]"
            } p-1 rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out`}
          />
          <PiArrowsDownUp
            size={24}
            strokeWidth={1.5}
            className={`${
              theme
                ? "text-[#FFFFFF] hover:bg-[#FFFFFF1A]"
                : "text-[#1C1C1C] hover:bg-[#1C1C1C0D]"
            } p-1 rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out`}
            onClick={() => handleSortByStatus()}
          />
        </div>
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-lg border-[1px] ${
            theme
              ? "bg-[#1C1C1C66] border-[#FFFFFF33]"
              : "bg-[#FFFFFF] border-[#1C1C1C1A]"
          }`}
        >
          <CiSearch
            size={20}
            className={`${theme ? "text-[#FFFFFF33]" : "text-[#1C1C1C33]"}`}
          />
          <input
            type="text"
            value={state.searchedOrder}
            placeholder="Search"
            onChange={(e) => handleSearchedOrder(e)}
            className={`border-none outline-none bg-transparent w-[100px] text-xs
              ${
                theme
                  ? "text-[#FFFFFF33] placeholder:text-[#FFFFFF33]"
                  : "text-[#1C1C1C33] placeholder:text-[#1C1C1C33]"
              }`}
          />
        </div>
      </div>
      <OrderTable
        searchedOrder={state?.searchedOrder}
        isSortByStatus={state?.isSortByStatus}
      />
    </main>
  );
};

export default Orders;
