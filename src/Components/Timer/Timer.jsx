import moment from "moment";
import React, { useEffect, useState } from "react";

const Timer = () => {
  var [date, setDate] = useState(new Date());
  const currTime = moment(new Date()).format("LTS");

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <div className='h4'>
      {date.toLocaleTimeString()} {currTime.split(" ")?.[1]}
    </div>
  );
};

export default Timer;
