import React, { useState } from "react";
import "./index.css";
import { Navbar, ProfileDropDown } from "@attrybtech/attryb-ui";
import prfimg from "../../assets/profileImage.jpg";
import Iconsrender from "./iconsrender";
import icon1 from "../../assets/bell.svg";
import icon2 from "../../assets/Icon.svg";
import icon3 from "../../assets/settings-01.svg";

const NavbarComp = () => {
  const [showProfile, setShowProfile] = useState(false);

  const name = "Cristiano Ronaldo";
  const email = "cr7@gmail.com";
  const userImage = prfimg;
  const organizationName = "";
  const attrybLogo = "/attryb-ui/assets/icons/navbar/attryb-logo.svg";

  // const navigate = useNavigate()
  const urlCallBack = (domain, url, openIn) => {
    if (!url) return;

    if (openIn == "redirect") {
      // navigate(url);
    } else {
      window.open(`${domain}${url}`, openIn, "noreferrer");
    }
  };

  const handleProfileToggle = () => {
    setShowProfile(!showProfile);
  };
  const hideProfileHandler = () => {
    setShowProfile(false);
  };
  const productsConfig = [
    {
      id: "94232b08-7d33-11ed-9f3b-00155d3e8ac7",
      domain: "https://personalization-demo.attryb.com",
    },
    {
      id: "942338b7-7d33-11ed-9f3b-00155d3e8ac7",
      domain: "https://alpha.attryb.com",
      active: true,
    },
  ];

  const signOutCallBack = () => {
    //logic of signOut
  };

  return (
    <>
      <Navbar
        className="Navbar"
        navbarLeftSection={
          <img
            style={{
              backgroundColor: "black",
              width: "1.25rem",
              height: "1.25rem",
              color: "black",
            }}
            src="https://attryb.com/assets/images/vector.svg"
            alt=""
          />
        }
        navbarRightSection={
          <>
            <ul className="icon-list">

              <img src={icon1} alt="Icon 1" />
              <img src={icon2} alt="Icon 2" />
              <img src={icon3} alt="Icon 3" />
            </ul>
            <ProfileDropDown
              showProfile={showProfile}
              hideProfileHandler={hideProfileHandler}
              handleProfileToggle={handleProfileToggle}
              productsConfig={productsConfig}
              userImage={userImage}
              organizationName={organizationName}
              name={name}
              email={email}
              urlCallBack={urlCallBack}
              // profileChevronIcon={
              //     "/attryb-ui/assets/icons/navbar/chevron-white.svg"
              // }
              productChevronIcon={"https://icons8.com/icon/474/online"}
              settingUrlOpenIn="redirect"
              signOutCallBack={signOutCallBack}
            />
          </>
        }
      />
    </>
  );
};

export default NavbarComp;
