import React from "react";
import Notifications from "./Notifications";
import Activities from "./Activities";
import Contacts from "./Contacts";

const RightSideBar = () => {
  return (
    <div className="col-span-2 p-5 hidden xl:grid gap-y-6">
      <Notifications />
      <Activities />
      <Contacts />
    </div>
  );
};

export default RightSideBar;
