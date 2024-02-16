import React from "react";
// import SearchableDropdown from "./SearchableDropdown.jsx";
import { animals } from "../data/animal.jsx";
import { useState } from "react";
// import TagSearchableDropdown from "./TagSearchableDropdown.jsx";
import TagdropperDropdown from "./index.jsx";

const Dummy = () => {
  const [value, setValue] = useState("");

  // console.log("value",value);

  const handleChange = (val) =>{
    setValue(val);
  }


  return (
    <div className="dropdown-container-box">
      {/* <label>{lableName}</label> */}
      <div>
      
    
        <TagdropperDropdown
          options={animals}
          label="name"
          id="id"
          selectedVal={value}
          handleChange={handleChange}
        />

      </div>
    </div>
  );
};

export default Dummy;
