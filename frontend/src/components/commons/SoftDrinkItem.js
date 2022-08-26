import React, { useContext, useState, useEffect, useRef } from "react";
import { Add, Remove } from "@mui/icons-material";
import softDrinkContext from "../../context/softDrinkContext";
import { useSelector } from "react-redux";

export default function AddonItem({ softDrink, index, prod_id }) {
  const context = useContext(softDrinkContext);
  const ref = useRef();
  const { cartItems } = useSelector((store) => store.cart);
  const { softDrinksQuantity, setSoftDrinksQuantity } = context;
  const [quantity, setQuantity] = useState({
    softDrink: "",
    quantity: "",
  });
  // handle whcn clicked on add icon
  const handleAdd = (e, softDrink) => {
    e.target.parentElement.style.display = "none";
    e.target.parentElement.nextSibling.style.display = "flex";
    setQuantity({
      softDrink: softDrink,
      quantity: 1,
    });
    setSoftDrinksQuantity(
      softDrinksQuantity.concat({ softDrink: softDrink, quantity: 1 })
    );
  };

  //handle when clicked on either + or -
  const handleQuantity = (operator, e, softDrink) => {
    const filteredSoftDrink = softDrinksQuantity.find(
      (softDrinkCheck) => softDrinkCheck.softDrink._id === softDrink._id
    );
    if (operator === "+") {
      const newQuantity = quantity.quantity + 1;
      setQuantity({
        softDrink: softDrink,
        quantity: newQuantity,
      });
      filteredSoftDrink.quantity = newQuantity;
    } else {
      if (quantity.quantity === 0) {
        return;
      }
      const newQuantity = quantity.quantity - 1;
      setQuantity({
        softDrink: softDrink,
        quantity: newQuantity,
      });
      filteredSoftDrink.quantity = newQuantity;
    }
  };

  const checkSoftDrink = (prod_id) => {
    const checkFilter = cartItems.find((item) => item.prod_id === prod_id);
    // check if product not exist in cart items then return it
    if (checkFilter === undefined) {
      return;
    }
    const checkSoftDrink = checkFilter.softDrinks.find(
      (item) => item.softDrink._id === softDrink._id
    );
    if (checkSoftDrink === undefined) {
      return;
    } else {
      ref.current.parentElement.style.display = "none";
      ref.current.parentElement.nextSibling.style.display = "flex";
      setQuantity({ softDrink, quantity: checkSoftDrink.quantity });
      setSoftDrinksQuantity(
        softDrinksQuantity.concat({
          softDrink: softDrink,
          quantity: checkSoftDrink.quantity,
        })
      );
    }
  };

  useEffect(() => {
    //check if addon is with product or not
    checkSoftDrink(prod_id);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="img">
        <img src={softDrink.pic} alt="Addon" width={30} />
      </div>
      <div className="addon-name">
        <span>{softDrink.name}</span>
        <span className="addon-price">Rs {softDrink.price}</span>
      </div>
      <div className="addon-add" style={{ display: "flex", width: "7vw" }}>
        <span onClick={(e) => handleAdd(e, softDrink)} ref={ref}>
          + Add
        </span>
      </div>
      <div className="addon-quantity" style={{ display: "none", width: "7vw" }}>
        <Remove onClick={(e) => handleQuantity("-", e, softDrink)} />
        <span>{quantity.quantity}</span>
        <Add onClick={(e) => handleQuantity("+", e, softDrink)} />
      </div>
    </>
  );
}
