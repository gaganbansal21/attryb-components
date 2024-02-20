import React from "react";
import { animals } from "../data/animal.jsx";
import { useState } from "react";
import DropdownStaticDynamic from "./index.jsx";


const StatDrop = ({isIcon}) => {
  const [value, setValue] = useState("");

  // console.log("value",value);

  const handleChange = (val) =>{
    setValue(val);
  }


  return (
    <div className="dropdown-container-box">
      {/* <label>{lableName}</label> */}
      <div>
        <DropdownStaticDynamic
          options={animals}
          label="name"
          id="id"
          selectedVal={value}
          handleChange={handleChange}
          isIcon={isIcon}
        />
      </div>
    </div>
  );
};

export default StatDrop;
