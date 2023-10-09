import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";

const AppLayout = ({ children }) => {
  return (
    <>
      <div className=''>
        <Sidebar />
        <div className=''>{children}</div>
      </div>
    </>
  );
};

export default AppLayout;
