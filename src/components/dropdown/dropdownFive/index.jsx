import React from "react";
import { useEffect, useRef, useState } from "react";
import './relative.css';
import Tag from "./Tag";
import dropdownIcon from "../../../assets/dropdown-icon.svg";
import tickIcon from "../../../assets/tick-icon.svg";

function TagdropperDropdown({ options, label, id, selectedVal, handleChange }) {
  const [SelectedValues, SetSelectedValues] = useState([]);
  // const [currentVal, SetcurrentVal] = useState(0);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchId, SetsearchId] = useState([]);
  const inputRef = useRef(null);

  const handleCloseclick = (val) => {
    console.log(val);
      searchId.splice(searchId.indexOf(val), 1);
      SetsearchId(searchId);
      // Remove from SelectedValues if needed
      const objWithIdIndex = SelectedValues.findIndex((item) => item.id === val);
      if (objWithIdIndex !== -1) {
        SelectedValues.splice(objWithIdIndex, 1);
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
      const updatedSearchId = searchId.filter(id => id !== option.id);
      SetsearchId(updatedSearchId);

      const updatedSelectedValues = SelectedValues.filter(item => item.id !== option.id);
      SetSelectedValues(updatedSelectedValues);
    } else {
      console.log("added");
      SetsearchId([...searchId, option.id]);
      SetSelectedValues([...SelectedValues, option]);
    }
  
    // setIsLabelVisible(true);
    // setIsOpen((isOpen) => !isOpen); // Uncomment if needed
  };
  

  // function toggle(e) {
  //   // console.log(e.target);
  //   setIsOpen(e && e.target === inputRef.current);
  // }

  

  const getDisplayValue = () => {
    if (query) return query;
  
    return "";
  };

  // const [isLabelVisible, setIsLabelVisible] = useState(false);

  // const handleFocusIn = () => {
  //   setIsLabelVisible(true);
  // };

  // const handleFocusOut = (e) => {
  //   if (e.target.value === "") {
  //     setIsLabelVisible(false);
  //   }
  // };

  useEffect(() => {
    document.addEventListener("click", toggle);

    return () => document.removeEventListener("click", toggle);

  }, []);

  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
  }

  const worker = "Hello";

  const handleClickdropIcon = () =>{
    setIsOpen((isOpen) => !isOpen)
  }

  const handleClickonInput = () =>{
    if(isOpen){
      setIsOpen((isOpen) => isOpen)
    }
    else{
      setIsOpen((isOpen) => !isOpen)
    }
  }

  // console.log("SelectedValues",SelectedValues);
  // console.log("searchId",searchId);

  return (
    <div className="main-conotainer-dropdown">
      <div className="main-container-wrapper-class">
        <div className="input-box-container" >
          <div className="selected-value">input-container-with-tag
            <div className="checker-inside-contianer">
              {SelectedValues.map((el, index) => (
                // {console.log(el)}
                <Tag Key = {el.id} value={el.name} returnkey = {handleCloseclick}/>
              ))}
              <input
                id = "div-input-container-input"
                placeholder={worker}
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
        // onFocus={handleFocusIn}
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
              <div className="options-data-single">{option[label]}</div>
              {/* {console.log(searchId)} */}
              <div className="tick-icon-class-container">
                {searchId !== -1 &&
                  searchId.findIndex(id => id === option.id) !== -1 &&
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
