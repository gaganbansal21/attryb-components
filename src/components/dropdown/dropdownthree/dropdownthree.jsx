import React from "react";
import { useEffect, useRef, useState } from "react";
import "./index.css";

import dropdownIcon from "../../../assets/dropdown-icon.svg";
import tickIcon from "../../../assets/tick-icon.svg";

function DropdownThree({
  options,
  label,
  id,
  selectedVal,
  handleChange,
  isIcon,
}) {
  const [SelectedValues, SetSelectedValues] = useState();

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchId, SetsearchId] = useState();
  const inputRef = useRef(null);
  const [isLabelVisible, setIsLabelVisible] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const [currentselectedoption, Setcurrentselectedoption] = useState({
    icon: "",
    name: "",
  });
  var worker = false;
  const labelName = "Label-Name";

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  // useEffect(() => {
  //   document.addEventListener("click", toggle);
  //   return () => document.removeEventListener("click", toggle);
  // }, []);

  const selectOption = (option) => {
    setQuery("");
    handleChange(option[label]);
    Setcurrentselectedoption(option);
    SetsearchId(option.id);
    setIsLabelVisible(true);
    console.log("ini", isOpen);
    setIsOpen((isOpen) => !isOpen);
    console.log("fi", isOpen);
  };

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal) {
      return selectedVal;
    }

    return "";
  };

  const getPlaceholderValue = () => {
    if (isFocused) {
      return;
    } else if (searchId) {
      return;
    } else {
      return labelName;
    }
  };

  // useEffect(() => {
  //   if (searchId && inputRef.current) {
  //     inputRef.current.focus();
  //   }
  //   else if(isFocused){
  //     inputRef.current.focus();
  //   }
  // }, [searchId]);

  useEffect(() => {
    if (isFocused) {
      setIsLabelVisible(true);
      setIsOpen(true);
    } else {
      console.log("Hi");
      console.log(searchId);
      if (searchId) {
        console.log("Hello");
      } else {
        setIsLabelVisible(false);
      }
      setIsOpen(false);
    }
  }, [isFocused]);

  const handleClickdropIcon = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleClickonInput = () => {
    if (isOpen) {
      setIsOpen((isOpen) => isOpen);
    } else {
      setIsOpen((isOpen) => !isOpen);
    }
  };

  const handleFocus = () => {
    setFocused(true);
    setIsLabelVisible(true);
    setIsOpen(true);
    worker = true;
  };

  const handleBlur = (e) => {
    setFocused(false);
    if (e.target.value === "" && searchId) {
      setIsLabelVisible(false);
    }
  };


  const handleEnterDetect = (e) =>{
    console.log(e);
    if(e.key === "Enter"){
      console.log("HIH");
    }
  }

  
  return (
    <div
      id=""
      className={`main-container-wrapper-class-main ${isFocused ? "" : ""}`}
      tabIndex="0" // Make the div focusable
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div
        id=""
        className={`main-container-wrapper ${isFocused ? "isfocused" : ""}`}
      >
        <div id="" className="input-box-container-part">
          <div id="" className="selected-value-part">
            <label
              htmlFor="searchTerm"
              id="label"
              className={isLabelVisible ? "labeltext" : "hidden"}
            >
              {labelName}
            </label>
            <div id="" className="checker-inside-contianer-part">
              <input
                autoFocus={isFocused}
                className={`div-input-container-input ${
                  isIcon && selectedVal ? "padder-class-part" : ""
                }`}
                placeholder={getPlaceholderValue()}
                onClick={handleClickonInput}
                // onFocus={handleFocusIn}
                // onBlur={handleFocusOut}
                ref={inputRef}
                type="text"
                value={getDisplayValue()}
                name="searchTerm"
                onChange={(e) => {
                  setQuery(e.target.value);
                  handleChange(null);
                }}
                
                // size={value.length + 1}
                style={{ width: "100%" }}
              />
               <span>{isIcon && selectedVal && (<img src={currentselectedoption.icon.peopleIcon} alt="person" className="current-selected-option"/>)}</span>
            </div>
          </div>
        </div>

        <div className={`arrow ${isFocused ? "open" : ""}`}>
          <img src={dropdownIcon} alt="" onClick={handleClickdropIcon} />
        </div>
      </div>

      <div
        className={`options ${isOpen ? "open" : ""}`}
        id="list-div"
        // onFocus={handleFocusIn}
      >
        {filter(options).map((option, index) => {
          return (
            <div
              id="listdivitem"
              onClick={() => selectOption(option)}
              className={`option option-div-data ${
                option[label] === selectedVal ? "option-selected" : ""
              }`}
              key={`${id}-${index}`}
              data-icon={option.icon.peopleIcon}
            >
              <div id="listdivitemoptionslabel" className="options-data-single">
                {isIcon && (
                  <img
                    src={option.icon.peopleIcon}
                    alt="person-icon"
                    className="image-use-icon"
                  />
                )}
                {option[label]}
              </div>
              {/* {console.log(searchId)} */}
              <div
                id="listdivitemoptionstick"
                className="tick-icon-class-container"
              >
                {searchId === option.id && isOpen && selectedVal && (
                  <img src={tickIcon} alt="Tick" className="tick-icon" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DropdownThree;
