import React, { useEffect, useState } from "react";
import {
  cashFlowDataYearlyINFY,
  cashFlowDataQuaterlyINFY,
  incomeStatementDataQuaterlyINFY,
  incomeStatementDataYearlyINFY,
  balanceSheetDataQuaterlyINFY,
  balanceSheetDataYearlyINFY,
  companyOverviewDataINFY,
} from "../../../Utils/DemoJSON";
import { Box } from "@mui/material";
import Ratios from "./DIfferentViews/Ratios";
import CashFlowData from "./DIfferentViews/CashFlowData";
import BalanceSheetData from "./DIfferentViews/BalanceSheetData";
import IncomeStatementData from "./DIfferentViews/IncomeStatementData";
import CompanyOverviewData from "./DIfferentViews/CompanyOverviewData";
import { getBalanceSheetData, getCashflowData, getCompanyOverviewData, getIncomeStatementData } from "../../../Api/ApiCalls/data";

const Financial = () => {
  const [step, setStep] = useState(1);
  const [cashFlowData, setCashFlowData] = useState({ data: { yearly: cashFlowDataYearlyINFY, quaterly: cashFlowDataQuaterlyINFY }, loading: false });
  const [balanceSheetData, setBalanceSheetData] = useState({
    data: { yearly: balanceSheetDataYearlyINFY, quaterly: balanceSheetDataQuaterlyINFY },
    loading: false,
  });
  const [companyOverviewData, setCompanyOverviewData] = useState({ data: companyOverviewDataINFY, loading: false });
  const [incomeStatementData, setIncomeStatementData] = useState({
    data: { yearly: incomeStatementDataYearlyINFY, quaterly: incomeStatementDataQuaterlyINFY },
    loading: false,
  });

  const fetchBalanceSheetDataForInputCompany = async () => {
    const res = await getBalanceSheetData();
    if (res?.status === 200) {
      console.log(res, "this is balance sheet.");
    }
  };

  const fetchIncomeStatementDataForInputCompany = async () => {
    const res = await getIncomeStatementData();
    if (res?.status === 200) {
      console.log(res, "this is income statement.");
    }
  };

  const fetchCashFlowDataForInputCompany = async () => {
    const res = await getCashflowData();
    if (res?.status === 200) {
      console.log(res, "this is cash flow data.");
    }
  };

  const fetchCompanyOverviewDataInputCompany = async () => {
    const res = await getCompanyOverviewData();
    if (res?.status === 200) {
      console.log(res, "this is company overview data.");
    }
  };

  // useEffect(() => {
  // fetchCashFlowDataForInputCompany();
  // fetchBalanceSheetDataForInputCompany();
  // fetchCompanyOverviewDataInputCompany();
  // fetchIncomeStatementDataForInputCompany();
  // setBalanceSheetData({data : })
  // }, []);

  // console.log(cashFlowData?.data?.yearly?.[0], "this is a cashflow data...");

  return (
    <>
      <Box>
        <Box sx={{ padding: "20px", paddingTop: "0px" }}>
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
                        Balance Sheet Data
                      </button>
                    </li>
                    <li className='nav-item'>
                      <button
                        className={(step === 2 && "nav-link active") || "nav-link text-white"}
                        onClick={() => {
                          setStep(2);
                        }}>
                        Income Statement Data
                      </button>
                    </li>
                    <li className='nav-item'>
                      <button
                        className={(step === 3 && "nav-link active") || "nav-link text-white"}
                        onClick={() => {
                          setStep(3);
                        }}>
                        Cash Flow Data
                      </button>
                    </li>
                    <li className='nav-item'>
                      <button
                        className={(step === 4 && "nav-link active") || "nav-link text-white"}
                        onClick={() => {
                          setStep(4);
                        }}>
                        Ratios
                      </button>
                    </li>
                    <li className='nav-item'>
                      <button
                        className={(step === 5 && "nav-link active") || "nav-link text-white"}
                        onClick={() => {
                          setStep(5);
                        }}>
                        Company Overview Data
                      </button>
                    </li>
                  </ul>
                </div>
                {step === 1 && <BalanceSheetData props={{ balanceSheetData }} />}
                {step === 2 && <IncomeStatementData />}
                {step === 3 && <CashFlowData />}
                {step === 4 && <Ratios />}
                {step === 5 && <CompanyOverviewData />}
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Financial;
