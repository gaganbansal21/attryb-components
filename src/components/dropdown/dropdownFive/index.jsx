import React from "react";
import { useEffect, useRef, useState } from "react";
import "./TagdropperDropdown.css";
import Tag from "./Tag";
import dropdownIcon from "../../../assets/dropdown-icon.svg";
import tickIcon from "../../../assets/tick-icon.svg";

function TagdropperDropdown({ options, label, id, selectedVal, handleChange }) {
  const [SelectedValues, SetSelectedValues] = useState([]);

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchId, SetsearchId] = useState([]);
  const inputRef = useRef(null);
  const [isLabelVisible, setIsLabelVisible] = useState(false);
  const [isFocused, setFocused] = useState(false);
  
  var worker = false;
  const labelName = "Label-Name"

  const handleCloseclick = (val) => {
    console.log(val);

    const newsearch = [...searchId];

    const i = newsearch.indexOf(val);
    if (i !== -1) {
      newsearch.splice(i, 1);
      SetsearchId(newsearch);
    }

    const j = SelectedValues.findIndex((item) => item.id === val);
    if (j !== -1) {
      const updatedvalues = [...SelectedValues];
      updatedvalues.splice(j, 1);
      SetSelectedValues(updatedvalues);
    }
  };

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

    if (searchId.includes(option.id)) {
      console.log("removed");
      const updatedSearchId = searchId.filter((id) => id !== option.id);
      SetsearchId(updatedSearchId);

      const updatedSelectedValues = SelectedValues.filter(
        (item) => item.id !== option.id
      );
      SetSelectedValues(updatedSelectedValues);
    } else {
      console.log("added");
      SetsearchId([...searchId, option.id]);
      SetSelectedValues([...SelectedValues, option]);
    }

    if (isOpen) {
      setIsOpen((isOpen) => !isOpen);
    } else {
      setIsOpen((isOpen) => isOpen);
    }
  };


  const getDisplayValue = () => {
    if (query) return query;

    return "";
  };

  const getPlaceholderValue = () => {
    if (searchId.length > 0 || query) {
      return "";
    }
    return labelName;
  };

  useEffect(() => {
    if (searchId.length > 0 && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchId]);

  useEffect(() => {
    document.addEventListener("click", toggle);

    return () => document.removeEventListener("click", toggle);
  }, []);

  // function toggle(e) {
  //   console.log("event",e.target.id);
  //   if(e.target.id === 'listdivitem'){
  //     console.log(isOpen);
  //     setIsOpen(true);
  //   }
  //   else{
  //     setIsOpen(e && e.target === inputRef.current);
  //   }
  // }
  function toggle(e) {
    const clickedElementId = e.target.id.toLowerCase(); // Convert to lowercase
  
    console.log('Clicked Element ID:', clickedElementId);
  
    if (clickedElementId === 'listdivitem' || clickedElementId === 'listdivitemoptionslabel' || clickedElementId === 'listdivitemoptionstick' ) {
      console.log('Setting isOpen to true');
      setIsOpen(true);
    } else {
      console.log('Setting isOpen based on inputRef');
      setIsOpen(e && e.target === inputRef.current);
    }
  }
  

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
    if (e.target.value === "" && searchId.length === 0) {
      setIsLabelVisible(false);
    }
  };


  return (
    <div
      id=""
      className={`main-container-dropdown ${isFocused ? "" : ""}`}
      tabIndex="0" // Make the div focusable
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div
        id=""
        className={`main-container-wrapper-class ${isFocused ? "focused" : ""}`}
      >
        <div id="" className="input-box-container">
          <div id="" className="selected-value">
            <label
              htmlFor="searchTerm"
              id="label"
              className={isLabelVisible ? "labeltext" : "hidden labeltext"}
            >
              {labelName}
            </label>
            <div id="" className="checker-inside-contianer">
              {SelectedValues.map((el, index) => (
                // {console.log(el)}
                <Tag Key={el.id} value={el.name} returnkey={handleCloseclick} />
              ))}
              <input
                autoFocus={worker}
                className="div-input-container-input"
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
                }}
              />
            </div>
          </div>
        </div>
        <div className={`arrow ${isOpen ? "open" : ""}`}>
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
              <div id="listdivitemoptionslabel" className="options-data-single">{option[label]}</div>
              {/* {console.log(searchId)} */}
              <div id="listdivitemoptionstick" className="tick-icon-class-container">
                {searchId !== -1 &&
                  searchId.findIndex((id) => id === option.id) !== -1 &&
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
}

export default TagdropperDropdown;
