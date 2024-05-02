import React from "react";
import AppLayout from "../../AppLayout/AppLayout";
import ArticlesList from "./ArticlesList/ArticlesList";
import DashboardTables from "./DashboardTables/DashboardTables";

const NewsArticleModule = () => {
  return (
    <AppLayout>
      <div className=''>
        <h4>ARTICLES MODULE</h4>
        <hr style={{ color: "white" }} />
        <div className='row'>
          <div className='col-lg-6'>
            <ArticlesList />
          </div>
          <div className='col-lg-6'>
            <div className='row'>
              <div className='col me-2'>
                <DashboardTables />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default NewsArticleModule;
