import React, { Fragment } from "react";
import meal from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food-World</h1>
        <HeaderCardButton onCartOpen={props.onCartOpen}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={meal} />
      </div>
    </Fragment>
  );
};

export default Header;
