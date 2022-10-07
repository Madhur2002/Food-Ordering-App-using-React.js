import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCartClose}/>;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<BackDrop onCartClose={props.onCartClose}/>, portalElement)}  
      {createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
// revision of portasl and modals once again. V.V.Imp.