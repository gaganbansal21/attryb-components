import React from "react";
// import SearchableDropdown from "./SearchableDropdown.jsx";
import { animals } from "../data/animal.jsx";
import { useState } from "react";
import TagSearchableDropdown from "./TagSearchableDropdown.jsx";

const TagMainDrop = () => {
  const [value, setValue] = useState("");

  // console.log("value",value);

  const handleChange = (val) =>{
    setValue(val);
  }


  return (
    <div className="dropdown-container-box">
      {/* <label>{lableName}</label> */}
      <div>
      <label for="searchTerm" id="label" className="hidden labeltext">Title</label>
      
        <TagSearchableDropdown
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

export default TagMainDrop;