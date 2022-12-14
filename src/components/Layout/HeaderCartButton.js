import React,{useContext,useEffect,useState} from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
  const [btnISHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  
  const { items } = cartCtx;

  const numberofItems = items.reduce((cartNumber, item) => {
    return cartNumber + item.amount;
  }, 0);


  const btnClasses = `${classes.button} ${btnISHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items, cartCtx.items.length]);

  return (
    <button className={btnClasses} onClick={props.onCartOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofItems}</span>
    </button>
  );
};

export default HeaderCardButton;
