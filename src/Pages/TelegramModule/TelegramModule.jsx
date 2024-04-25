import React, { useCallback, useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import { telegramData } from "../../Utils/DemoJSON";
import AppLayout from "../../AppLayout/AppLayout";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { fetchTelegramData, fetchTelegramDataSearchInstances, fetchTelegramDataWithDateRange, getDemo, posLogInDemo } from "../../Api/ApiCalls/data";
import { TableLoader } from "../../Components/CustomLoader/CustomLoader";
import moment from "moment";
import { debounce } from "../../Utils/HelperFunctions";

const TelegramModule = () => {
  const [telegramRecom, setTelegramRecom] = useState({ data: telegramData, loading: false });
  // const [telegramRecom, setTelegramRecom] = useState({ data: [], loading: false });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInstanceResponse, setSearchInstanceResponse] = useState("");

  const [messagesGroup, setMessagesGroup] = useState(telegramRecom?.data?.[0]);
  const [teleParams, setTeleParams] = useState({ dateRange: { from: 0, to: 0, difference: "" }, search: "" });

  const handleViewGroupRecom = (el) => {
    console.log(el, "this is the group to view messages");
    setMessagesGroup(el);
  };

  // console.log(teleParams?.dateRange, "this is the telgram data...");
  const getTeleRecom = async (search) => {
    setTelegramRecom((v) => ({ ...v, loading: true }));
    try {
      const res = await Promise.resolve(
        fetchTelegramDataWithDateRange(parseInt(teleParams?.dateRange?.from), parseInt(teleParams?.dateRange?.to - 1), search)
      );
      if (res?.status === 200) {
        setTelegramRecom(() => ({ data: res?.data, loading: false }));
      }
      console.log(res, "thisssssssssss");
    } catch (error) {
      setTelegramRecom((v) => ({ ...v, loading: false }));
    }
  };

  const getRecomInstance = async (search) => {
    try {
      const res = await fetchTelegramDataSearchInstances(search);
      console.log(res, "this is the response I want to see");
      setSearchInstanceResponse(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);
  };

  const debouncedSearch = useCallback(
    debounce((term) => {
      getRecomInstance(term);
      console.log("Fetching data with term:", term);
    }, 900),
    []
  );

  useEffect(() => {
    if (!isNaN(teleParams?.dateRange?.from) && !isNaN(teleParams?.dateRange?.to !== NaN)) {
      getTeleRecom("");
    }
  }, [teleParams?.dateRange]);

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery, debouncedSearch]);

  return (
    <AppLayout>
      {" "}
      <div className='p-4'>
        <div className='row h-100'>
          {telegramRecom?.loading === false && telegramRecom?.data?.length > 0 && (
            <>
              <div className='row'>
                <div className='col-4'></div>
                <div className='col-4'>
                  <h4>TELEGRAM RECOMMENDATIONS</h4>
                </div>
                <div className='col-4 d-flex justify-content-end mb-2 p-0'>
                  <input
                    className='form-control mr-sm-2 w-50'
                    value={searchQuery}
                    onChange={(e) => handleInputChange(e)}
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                    style={{ width: "20%" }}
                  />
                  {searchInstanceResponse !== "" && <p className='ps-2'>Instance Count: {searchInstanceResponse}</p>}
                </div>
              </div>

              <hr style={{ color: "white" }} />
              <div className='col-4 ps-0'>
                <h4>Groups</h4>
                <hr />

                {/* <div className='d-flex justify-content-around'>
              <div className='pt-2 pb-2'>Name</div>
              <div className='pt-2 pb-2'>Networth(Crs.)</div>
            </div> */}
                <div className='' style={{ overflowY: "auto", maxHeight: "60vh" }}>
                  {telegramRecom?.data?.map((el, i) => {
                    return (
                      <Card
                        sx={{
                          backgroundColor: "#0e1422",
                          color: "white",
                          borderRadius: 4,
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          marginBottom: "8px",
                          cursor: "pointer",
                          "&:hover": {
                            transform: "scale(.97)",
                            borderRadius: 4,
                          },
                        }}
                        onClick={() => handleViewGroupRecom(el)}>
                        <CardContent sx={{ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: "10px !important" }}>
                          <div style={{ flex: 2, paddingRight: "16px" }}>
                            <div style={{ marginBottom: "8px" }}>
                              <Typography variant='6'>{el?.grpName || "N/A"}</Typography>
                              <Typography variant='body1'>Subscribers : {el?.subscribers || "N/A"}</Typography>
                            </div>
                          </div>
                          {/* <div style={{ flex: 2 }}>
                        <div>
                          <Typography variant='h5'>123,123</Typography>
                        </div>
                      </div> */}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
              <div className='col-8'>
                <ViewGroupRecomComponent props={{ messagesGroup, setTeleParams }} />
              </div>
            </>
          )}
          {telegramRecom?.loading === true && (
            <div className='text-center'>
              <TableLoader />
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

const ViewGroupRecomComponent = ({ props }) => {
  const { messagesGroup, setTeleParams } = props;
  console.log(messagesGroup, "inside the messages component");

  const [demo, setDemo] = useState([]);

  const handleDateRange = (selectedDates) => {
    if (Array.isArray(selectedDates) && selectedDates.length === 2) {
      const currentDate = new Date();
      const startDate = new Date(selectedDates[0]);
      const endDate = new Date(selectedDates[1]);

      const differenceInMillis = endDate.getTime() - startDate.getTime();
      const differenceInDays = Math.round(differenceInMillis / (1000 * 60 * 60 * 24));
      const daysFromStart = Math.abs(Math.round((startDate - currentDate) / (1000 * 60 * 60 * 24)));
      const daysFromEnd = Math.abs(Math.round((endDate - currentDate) / (1000 * 60 * 60 * 24)));

      console.log("Difference in days:", differenceInDays);
      console.log("Days from start date:", daysFromStart);
      console.log("Days from end date:", daysFromEnd);
      setTeleParams((v) => ({ ...v, dateRange: { from: parseInt(daysFromStart - 1), to: parseInt(daysFromEnd - 1), difference: differenceInDays } }));
    }
  };

  const formatViewsCount = (value) => {
    if (value >= 1000) {
      const formatted = (value / 1000).toFixed(2);
      if (formatted.endsWith(".00")) {
        return formatted.slice(0, -3) + "K";
      }
      return formatted + "K";
    }
    return value.toString();
  };

  const formatMessages = (encodedJSON) => {
    try {
      if (typeof encodedJSON !== "string") {
        throw new Error("Input is not a string");
      }
      const decodedData = JSON.parse(encodedJSON, (_, value) => {
        if (typeof value === "string") {
          return decodeURIComponent(value.replace(/\\x/g, "%"));
        }
        return value;
      });
      const messages = decodedData.messages.map((messageObj) => {
        return messageObj.message.replace(/\\n/g, "\n");
      });

      return messages.join("\n\n");
    } catch (error) {
      console.error("Error parsing JSON:", error.message);
      return "";
    }
  };

  const messageStringFormatted = formatMessages(JSON.stringify(messagesGroup));

  console.log(formatMessages(JSON.stringify(messagesGroup)), "this is the format message.");

  const loginDemo = async () => {
    console.log("this hirt");
    const payload = {
      email: "rohan.khanna@outlook.in",
      otp: "123456",
    };
    try {
      const res = await posLogInDemo(payload);
      console.log(res, "this is the response.");
    } catch (error) {}
  };

  return (
    <>
      <div className='row mb-2'>
        <div className='col-9'>{messagesGroup?.grpName ? <h6>{messagesGroup?.grpName}</h6> : <h4>MESSAGES</h4>}</div>
        <div className='col-3'>
          <Flatpickr
            className='calender_field form-control custom-form-control'
            // defaultValue={new Date()}
            options={{
              dateFormat: "d-M-Y",
              defaultDate: [new Date()],
              placeholder: "Select Date",
              mode: "range",
              maxDate: "today",
            }}
            // selectValue={[1]}
            onChange={(selectedDates, { name }) => {
              // setserviceDate(selectedDates);
              handleDateRange(selectedDates);
            }}
          />
        </div>
      </div>
      {/* <div className='messages-wrapper'></div> */}
      {/* <h5>{messageStringFormatted}</h5> */}
      <hr style={{ color: "white", margin: "0px" }} />
      {/* <button className='btn btn-primary' onClick={() => loginDemo()}>
        Click Me
      </button> */}
      <div className='' style={{ overflowY: "auto", maxHeight: "60vh" }}>
        {messagesGroup?.messages.length > 0 &&
          messagesGroup?.messages?.map((el, i) => {
            console.log(el, "this is the message el");
            return (
              <Card
                sx={{
                  backgroundColor: "#0e1422",
                  color: "white",
                  borderRadius: 4,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginBottom: "8px",
                  "&:hover": {
                    transform: "scale(.99)",
                    borderRadius: 4,
                  },
                }}
                key={i + "x"}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start", // Align items to the start (top)
                    paddingBottom: "10px !important",
                    position: "relative",
                  }}>
                  <div style={{ flex: 2, paddingRight: "16px", marginBottom: "16px", maxWidth: "90%" }}>
                    <div style={{ marginBottom: "8px", textAlign: "left" }}>
                      <Typography variant='6' style={{ whiteSpace: "pre-wrap" }}>
                        {messageStringFormatted}
                      </Typography>
                      {/* <Typography variant='6'>{"messageStringFormatted"}</Typography> */}
                    </div>
                  </div>
                  <div style={{ position: "absolute", bottom: 4, right: 12 }}>
                    <Typography variant='6' style={{ position: "relative", top: "2px", right: "25px", whiteSpace: "pre-wrap" }}>
                      {/* {moment(new Date()).format("llll")} */}
                      {el?.date}
                    </Typography>
                    <VisibilityIcon sx={{ color: "white", position: "relative", right: "16px" }} />
                    <span style={{ position: "relative", top: "2px", right: "10px" }}>{formatViewsCount(el?.views)}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        {messagesGroup?.messages.length === 0 && <div className='mt-4'>No messages found.</div>}
      </div>
    </>
  );
};

export default TelegramModule;
