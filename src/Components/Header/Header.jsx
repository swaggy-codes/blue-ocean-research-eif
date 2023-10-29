import React from "react";
import Timer from "../Timer/Timer";
import AsyncSelect from "react-select/async";

const Header = () => {
  return (
    <div className='col d-flex justify-content-between ms-4 me-4 mt-4'>
      {/* <Typography component='div'>Searchbar</Typography> */}
      <div className='col-lg-4'>
        <AsyncSelect />
      </div>
      <div className='col-lg-4 h4'>
        Blue Ocean Research
        {/* <Typography variant='h6' noWrap component='div'>
        </Typography> */}
      </div>
      <div className='col-lg-4'>
        <Timer />
      </div>
      {/* <Typography component='div'>
      </Typography> */}
    </div>
  );
};

export default Header;
