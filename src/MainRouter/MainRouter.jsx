import React from "react";
import { Route, Routes } from "react-router-dom";
import Economical from "../Pages/Screens/Economical";
import Industrial from "../Pages/Screens/Industrial";
import Financial from "../Pages/Screens/Financial";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Economical />} />
        <Route path='/industrial' element={<Industrial />} />
        <Route path='/financial' element={<Financial />} />
      </Routes>
    </>
  );
};

export default MainRouter;
