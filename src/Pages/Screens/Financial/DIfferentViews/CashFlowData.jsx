import React from "react";
import { cashFlowDataYearlyINFY, headingForCashFlowData } from "../../../../Utils/DemoJSON";
import CustomTable from "../../../../Components/CustomTable/CustomTable";

const CashFlowData = () => {
  return (
    <>
      <CustomTable headers={headingForCashFlowData} data={cashFlowDataYearlyINFY} />
    </>
  );
};

export default CashFlowData;
