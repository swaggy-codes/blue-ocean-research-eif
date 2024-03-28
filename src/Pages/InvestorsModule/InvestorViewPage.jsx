import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AppLayout from "../../AppLayout/AppLayout";
import Overview from "./InvestorViewSubHeadings/Overview";
import Holdings from "./InvestorViewSubHeadings/Holdings";
import BulkBlockDeals from "./InvestorViewSubHeadings/BulkBlockDeals";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const InvestorViewPage = () => {
  const [step, setStep] = useState(1);

  const { state } = useLocation();

  console.log(state, "this is the location");
  return (
    <AppLayout>
      <h4>INVESTORS MODULE</h4>
      <hr style={{ color: "white" }} />
      <div className='row'>
        <div className='col-6'>
          <h5 style={{ textAlign: "start" }}>{state?.name}</h5>
        </div>
        <div className='col-6 text-end'>
          <ArrowBackIcon />
        </div>
      </div>
      {/* <hr style={{ color: "white", width: "20%" }} /> */}
      <div className='main mt-2'>
        <div className='mob-p-0'>
          <div className='pe-1'>
            <div className='border-bottom pt-2 mb-2'>
              <ul className='nav nav-tabs overflow-x border-1'>
                <li className='nav-item'>
                  <button
                    className={(step === 1 && "nav-link active") || "nav-link text-white"}
                    onClick={() => {
                      setStep(1);
                    }}>
                    Overview
                  </button>
                </li>
                <li className='nav-item'>
                  <button
                    className={(step === 2 && "nav-link active") || "nav-link text-white"}
                    onClick={() => {
                      setStep(2);
                    }}>
                    Holdings
                  </button>
                </li>
                <li className='nav-item'>
                  <button
                    className={(step === 3 && "nav-link active") || "nav-link text-white"}
                    onClick={() => {
                      setStep(3);
                    }}>
                    Bulk/Block Deals
                  </button>
                </li>
              </ul>
            </div>
            {step === 1 && <Overview data={state} />}
            {step === 2 && <Holdings data={state?.holdings} />}
            {step === 3 && <BulkBlockDeals data={state?.bulkBlockDeals} />}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default InvestorViewPage;
