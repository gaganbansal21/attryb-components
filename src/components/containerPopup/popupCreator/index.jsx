import React from "react";
import {
  AlertPopup,
  AlertPopupHeader,
  AlertPopupBody,
  AlertPopupFooter,
  Button,
  useModal,
} from "@attrybtech/attryb-ui";
import './index.css';
import Banner from "../../Navbar/NavbarBanner";

const PopupTrigger = () => {
  const { modalState, modalRef, exitModal, showModal } = useModal();

  const modalOkayHandler =  () => {
    console.log("Accepted");
    exitModal();
  };

  const modalCancelHandler = () => {
    console.log("Cancelled");
    exitModal();
  };
  const handleBannerClose = () =>{
    exitModal();
  }
  return (
    <div className="postion-broadcast-popup">
    <Button onClick={showModal}>Open Alert</Button>
      <AlertPopup
        wrapperRef={modalRef}
        name="example-popup-1"
        visibility={modalState}
        onBackdropClick={modalCancelHandler}
        className="alert-popup-classname"
      >
        <Banner onclick={handleBannerClose}/>
        <AlertPopupHeader>Header</AlertPopupHeader>
        <AlertPopupBody>Some body content</AlertPopupBody>
        <AlertPopupFooter>
          <Button onClick={modalCancelHandler} variant="link">
            Cancel
          </Button>
          <Button onClick={modalOkayHandler}>Okay</Button>
        </AlertPopupFooter>
      </AlertPopup>
    </div>
  );
};

export default PopupTrigger;
