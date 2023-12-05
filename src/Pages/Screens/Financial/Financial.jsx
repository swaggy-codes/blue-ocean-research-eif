import React, { useEffect, useState } from "react";
import { getBalanceSheetData, getCashflowData, getCompanyOverviewData, getIncomeStatementData } from "../../../Api/ApiCalls/data";
import {
  cashFlowDataYearlyINFY,
  cashFlowDataQuaterlyINFY,
  incomeStatementDataQuaterlyINFY,
  incomeStatementDataYearlyINFY,
  balanceSheetDataQuaterlyINFY,
  balanceSheetDataYearlyINFY,
  companyOverviewDataINFY,
} from "../../../Utils/DemoJSON";
import { Box, Card, CardContent, Typography, makeStyles } from "@mui/material";
import { styled } from "@mui/system";
import CarouselForMultipleDetailedCards from "./CarouselForMultipleDetailedCards";
import BalanceSheetData from "./DIfferentViews/BalanceSheetData";
import IncomeStatementData from "./DIfferentViews/IncomeStatementData";
import CashFlowData from "./DIfferentViews/CashFlowData";
import Ratios from "./DIfferentViews/Ratios";
import CompanyOverviewData from "./DIfferentViews/CompanyOverviewData";

const FinancialCard = styled(Card)({
  maxWidth: 400,
  margin: "auto",
  marginTop: 50,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s",
  borderRadius: 16,
  overflow: "hidden",
  backgroundColor: "#fff",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const Title = styled("div")({
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 16,
  color: "#333",
});

const DetailItem = styled("div")({
  marginBottom: 12,
  fontSize: 16,
  color: "#555",
});

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
      <Box sx={{ minHeight: "100vh" }}>
        {/* <h5 style={{ color: "white" }}>Financial</h5> */}
        {/* <FinancialCard>
          <CardContent>
            <Title>Balance Sheet Data</Title>

            <DetailItem>Fiscal Date Ending: {cashFlowData?.data?.yearly?.[0]?.fiscalDateEnding}</DetailItem>
            <DetailItem>Reported Currency: {cashFlowData?.data?.yearly?.[0]?.reportedCurrency}</DetailItem>
            <DetailItem>Operating Cashflow: {cashFlowData?.data?.yearly?.[0]?.operatingCashflow}</DetailItem>
            <DetailItem>Payments for Operating Activities: {cashFlowData?.data?.yearly?.[0]?.paymentsForOperatingActivities}</DetailItem>
          </CardContent>
        </FinancialCard> */}
        {/* <CarouselForMultipleDetailedCards cashFlowData={cashFlowData} /> */}
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
