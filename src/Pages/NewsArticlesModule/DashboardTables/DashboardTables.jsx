import React, { useEffect, useState } from "react";
import SentimentsTable from "./SentimentsTable";
import CompanyTrendsTable from "./CompanyTrendsTable";
import NewsArticlesTable from "./NewsArticlesTable";

const DashboardTables = () => {
  const [step, setStep] = useState(1);
  const [sentiments, setSentiments] = useState({ data: [], loading: true });

  // const getCompanySentiment = async () => {
  //   try {
  //     const res = await getCompanySentimentsaApi();
  //     console.log(res, "9999999999999999999");
  //     if (res?.status === 200) {
  //       setTimeout(() => {
  //         setSentiments((v) => ({ ...v, data: res?.data, loading: false }));
  //       }, 100);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // getCompanySentiment();
  }, []);

  return (
    <>
      <div className='main mt-2'>
        <div className='mob-p-0'>
          <div className='pe-1'>
            <div className='border-bottom pt-0 mb-2'>
              <ul className='nav nav-tabs overflow-x border-1'>
                <li className='nav-item'>
                  <button
                    className={(step === 1 && "nav-link active") || "nav-link text-white"}
                    onClick={() => {
                      setStep(1);
                    }}>
                    Sentiments
                  </button>
                </li>
                <li className='nav-item'>
                  <button
                    className={(step === 2 && "nav-link active") || "nav-link text-white"}
                    onClick={() => {
                      setStep(2);
                    }}>
                    Company Trends
                  </button>
                </li>
                <li className='nav-item'>
                  <button
                    className={(step === 3 && "nav-link active") || "nav-link text-white"}
                    onClick={() => {
                      setStep(3);
                    }}>
                    Number of Articles
                  </button>
                </li>
              </ul>
            </div>
            {step === 1 && <SentimentsTable props={{ sentiments }} />}
            {step === 2 && <CompanyTrendsTable props={{ sentiments }} />}
            {step === 3 && <NewsArticlesTable props={{ sentiments }} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTables;
