import React from "react";

import { ratios, headingForRatios } from "../../../../Utils/DemoJSON";
import CustomTable from "../../../../Components/CustomTable/CustomTable";

const Ratios = () => {
  return (
    <>
      <CustomTable headers={headingForRatios} data={ratios} />
    </>
  );
};

export default Ratios;
