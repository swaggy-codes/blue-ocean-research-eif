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
import InvestorViewPage from "../Pages/InvestorsModule/InvestorViewPage";
import TelegramModule from "../Pages/TelegramModule/TelegramModule";
import NewsArticleModule from "../Pages/NewsArticlesModule/NewsArticleModule";

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
      <Route path='/investor-view' element={<InvestorViewPage />} />
      <Route path='/global' element={<GlobalModule />} />
      <Route path='/telegram-recommendations' element={<TelegramModule />} />
      <Route path='/news-articles' element={<NewsArticleModule />} />
    </Routes>
  );
};

export default MainRouter;
