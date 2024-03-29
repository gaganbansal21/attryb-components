import React from "react";
import "./index.css";
import { Navbar, Button } from "@attrybtech/attryb-ui";
import backIcon from "../../../assets/back-icon.svg";

const NavbarVariants = ({templateName, saveandscheduleclick,saveAndDraftClick,handleExitButton}) => {
  // const saveandscheduleclick = () => {
  //   //logic for onclick on Save and Schedule button
  // };

  // const saveAndDraftClick = () => {
  //   //logic for onclick on Save and Draft button
  // };

 

  return (
    <div className="Navbar-wrapper">
    <div className="back-navbar-container">
            <img src={backIcon} alt="back-icon" onClick={handleExitButton}></img>
    </div>
    
    <div className="navbar-navbar-container">
    <Navbar
        className="Navbar"
        navbarLeftSection={
          <>
              <div className="left-container-name-div">
                <h2 >
                  {templateName}
                </h2>
              </div>
          </>
        }
        navbarRightSection={
          <>
            <Button
              variant="solid"
              colorScheme="secondary"
              onClick={saveAndDraftClick}
            >
              Save as Draft
            </Button>
            <Button onClick={saveandscheduleclick}>Save and Schedule</Button>
          </>
        }
      />
    </div>
      
    </div>
  );
};

export default NavbarVariants;
