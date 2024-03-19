import React, { useState } from "react";
import CustomTable from "../../Components/CustomTable/CustomTable";
import { headingForIncomeStatementData, incomeStatementDataYearlyINFY } from "../../Utils/DemoJSON";

const After = () => {
  return (
    <div>
      <CustomTable headers={headingForIncomeStatementData} data={incomeStatementDataYearlyINFY} />
    </div>
  );
};

export default After;
