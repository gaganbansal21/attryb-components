import React from "react";
import "./index.css"; // Import CSS file if needed
import {Navbar} from "@attrybtech/attryb-ui"
import close from  "../../../assets/close.svg";



const Banner = ({onclick}) => {
  
  return (
    <Navbar className="Navbar"
    navbarLeftSection={
        <h2 className="navbar_left_text">
          Flash_sale_template
        </h2>
    }
    navbarRightSection={
        <div className="navbar-banner-right">    
        <img src={close} alt="close_btn" onClick = {onclick} />
        </div>
    }
/>
  );
}

export default Banner;
