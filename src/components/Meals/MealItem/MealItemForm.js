import React, {useRef , useState} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {

  const [qtyIsVlaid, setqtyIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredQuantity = amountInputRef.current.value;
    // enteredQuantity depicts how many 'units' of a meal are we willing to order 
    const enteredQuantityNumber = +enteredQuantity;
    // console.log(enteredQuantity)
    if (enteredQuantity.trim().length === 0 || enteredQuantityNumber < 1 || enteredQuantityNumber > 100) {
      setqtyIsValid(false);
      return;
    }
    
    props.onAddToCart(enteredQuantityNumber);
  }

  return (
    <form action="" className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "100",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button>+ Add</button>
      {!qtyIsVlaid && <p>Pls enter valid quantity of meals</p>}
    </form>
  );
};

export default MealItemForm;
