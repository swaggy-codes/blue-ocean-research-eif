import React, { useState } from "react";
import AppLayout from "../../AppLayout/AppLayout";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Before from "./Before";
import After from "./After";
import { balanceSheetDataQuaterlyINFY, balanceSheetDataYearlyINFY } from "../../Utils/DemoJSON";

const GlobalModule = () => {
  const [step, setStep] = useState(1);

  const [balanceSheetData, setBalanceSheetData] = useState({
    data: { yearly: balanceSheetDataYearlyINFY, quaterly: balanceSheetDataQuaterlyINFY },
    loading: false,
  });

  return (
    <AppLayout>
      <Box>
        <Box sx={{ padding: "20px", paddingTop: "0px" }}>
          <h4>GLOBAL MODULE</h4>
          <hr style={{ color: "white" }} />
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
                        Before India Market
                      </button>
                    </li>
                    <li className='nav-item'>
                      <button
                        className={(step === 2 && "nav-link active") || "nav-link text-white"}
                        onClick={() => {
                          setStep(2);
                        }}>
                        After India Market
                      </button>
                    </li>
                    <li className='nav-item'>
                      <button
                        className={(step === 3 && "nav-link active") || "nav-link text-white"}
                        onClick={() => {
                          setStep(3);
                        }}>
                        Indian ADR
                      </button>
                    </li>
                  </ul>
                </div>
                {step === 1 && <After />}
                {step === 2 && <After />}
                {step === 3 && <After />}
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default GlobalModule;
