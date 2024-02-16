import React from "react";
import SearchableDropdown from "./SearchableDropdown.jsx";
import { animals } from "../data/animal.jsx";
import { useState } from "react";

const Droprunner = ({isCome}) => {

  const [value, setValue] = useState("");

  const handleChange = (val) =>{
    setValue(val);
  }

  const labelName = "Label-Name";

  return (
    <div className="dropdown-container-box">

      <div>
        <SearchableDropdown
          options={animals}
          label="name"
          labelName={labelName}
          id="id"
          selectedVal={value}
          handleChange={handleChange}
          isIcon={isCome}
        />
      </div>
    </div>
  );
};

export default Droprunner;
