import React from "react";
import CustomTable from "../../../../Components/CustomTable/CustomTable";
import { incomeStatementDataYearlyINFY, headingForIncomeStatementData } from "../../../../Utils/DemoJSON";

const IncomeStatementData = () => {
  return (
    <>
      <CustomTable headers={headingForIncomeStatementData} data={incomeStatementDataYearlyINFY} />
    </>
  );
};

export default IncomeStatementData;
