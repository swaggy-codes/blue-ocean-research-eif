import React from "react";
import { Route, Routes } from "react-router-dom";
import Economical from "../Pages/Screens/Economical/Economical";
import Industrial from "../Pages/Screens/Industrial/Industrial";
import Financial from "../Pages/Screens/Financial/Financial";
import ViewAllVariables from "../Pages/Screens/Economical/ViewAllVariables";
import Home from "../Pages/Home/Home";
import RecommendationsModule from "../Pages/RecommendationsModule/RecommendationsModule";
import InvestorsModule from "../Pages/InvestorsModule/InvestorsModule";
import GlobalModule from "../Pages/GlobalModule/GlobalModule";

const MainRouter = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Economical />} />
      <Route path='/economical' element={<Economical />} />
      <Route path='/view-all-variables' element={<ViewAllVariables />} />
      <Route path='/industrial' element={<Industrial />} />
      <Route path='/financial' element={<Financial />} />
      <Route path='/recommendations' element={<RecommendationsModule />} />
      <Route path='/investors' element={<InvestorsModule />} />
      <Route path='/global' element={<GlobalModule />} />
    </Routes>
  );
};

export default MainRouter;
