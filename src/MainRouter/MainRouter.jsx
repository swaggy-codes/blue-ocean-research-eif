import React from "react";
import { Route, Routes } from "react-router-dom";
import Economical from "../Pages/Screens/Economical/Economical";
import Industrial from "../Pages/Screens/Industrial/Industrial";
import Financial from "../Pages/Screens/Financial/Financial";
import ViewAllVariables from "../Pages/Screens/Economical/ViewAllVariables";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Economical />} />
        <Route path='/economical' element={<Economical />} />
        <Route path='/view-all-varialbles' element={<ViewAllVariables />} />
        <Route path='/industrial' element={<Industrial />} />
        <Route path='/financial' element={<Financial />} />
      </Routes>
    </>
  );
};

export default MainRouter;
