import { useEffect, useRef, useState } from "react";
import React from "react";
import './tagsearch.css';

import dropdownIcon from "../../../assets/dropdown-icon.svg";
import tickIcon from "../../../assets/tick-icon.svg";
import Tag from "./Tag";

const TagSearchableDropdown = ({
  options,
  label,
  id,
  selectedVal,
  handleChange,
}) => {

  const [currentVal, SetcurrentVal] = useState(0);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchId, SetsearchId] = useState(-1);
  const inputRef = useRef(null);

  const [SelectedValues,SetSelectedValues] = useState([]);
    
  const [currentselectedoption, Setcurrentselectedoption] = useState({
    icon: "",
    name: "",
  });

  // console.log("currentselectedoption", currentselectedoption);

  useEffect(() => {
    document.addEventListener("click", toggle);

    return () => document.removeEventListener("click", toggle);
  }, []);

  const selectOption = (option) => {
    setQuery(() => "");
    handleChange(option[label]);
    Setcurrentselectedoption(option);
    SetSelectedValues([...selectedVal,option]);
    SetsearchId(option.id);
    setIsLabelVisible(true);
    setIsOpen((isOpen) => !isOpen);
  };

  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
  }

  console.log(selectedVal);

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal) {
      return selectedVal;
    }

    return "";
  };

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  const [isLabelVisible, setIsLabelVisible] = useState(false);

  const handleFocusIn = () => {
    setIsLabelVisible(true);
  };

  const handleFocusOut = (e) => {
    if (e.target.value === "") {
      setIsLabelVisible(false);
    }
  };

  const worker = "Label-Name";

  useEffect(() => {}, []);

  const handleEnterDetect = (e) => {
    if (e.key === "Enter") {
      console.log("HIH");
    }
  };

  const handleKeyMovement = (e) => {
    if (e.key === "ArrowUp") {
        console.log("HI");
    } else if (e.key === "ArrowDown") {
      console.log("ArrowDown");
    }
  };


  const handleCloseclick = () =>{
    console.log("HI");
  }

  return (
    <div className="dropdown">
      <div className="control">
        <div className="selected-value">
          <label
            htmlFor="searchTerm"
            id="label"
            className={isLabelVisible ? "labeltext" : "hidden labeltext"}
          >
            {worker}
          </label>
          <div className="input-content-wrapper">
          {SelectedValues.map((el, index) => (
            <Tag key={el.id} value={el.label} onClick={handleCloseclick} />
          ))}
            {/* {selectedVal && ()} */}
            <input
              // className="input-name  padder-class"
              className={`input-name`}
              placeholder={worker}
              onFocus={handleFocusIn}
              onBlur={handleFocusOut}
              ref={inputRef}
              type="text"
              value={getDisplayValue()}
              name="searchTerm"
              onChange={(e) => {
                setQuery(e.target.value);
                handleChange(null);
              }}
              onClick={toggle}
              onKeyUp={handleEnterDetect}
              onKeyDown={handleKeyMovement}
            ></input>
          </div>
        </div>
        <div className={`arrow ${isOpen ? "open" : ""}`}>
          <img src={dropdownIcon} alt="" onClick={toggle} />
        </div>
      </div>

      <div
        className={`options ${isOpen ? "open" : ""}`}
        onFocus={handleFocusIn}
      >
        {filter(options).map((option, index) => {
          return (
            <div
              id="optionsdiv"
              onClick={() => selectOption(option)}
              className={`option option-div-data ${
                option[label] === selectedVal ? "option-selected" : ""
              }`}
              key={`${id}-${index}`}
              data-icon={option.icon.peopleIcon}
            >
              <div className="options-data-single">
                {/* {
                  <img
                    src={option.icon.peopleIcon}
                    alt="person-icon"
                    className="image-use-icon"
                  />
                } */}
                {option[label]}
              </div>
              {/* searchId !==-1 && searchId === option.id  && isOpen && selectedVal && */}
              <div className="tick-icon-class-container">
                {searchId !== -1 &&
                  searchId === option.id &&
                  isOpen &&
                  selectedVal && (
                    <img src={tickIcon} alt="Tick" className="tick-icon" />
                  )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TagSearchableDropdown;
