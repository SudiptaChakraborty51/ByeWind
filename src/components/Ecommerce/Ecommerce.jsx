import React from "react";
import { useSelector } from "react-redux";
import Metrics from "./Metrics";

const Ecommerce = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="grid gap-y-5">
      <h2
        className={`text-sm font-semibold ${
          theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
        }`}
      >
        eCommerce
      </h2>
      <Metrics />
    </div>
  );
};

export default Ecommerce;
