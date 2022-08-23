import React, { useContext, useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import softDrinkContext from "../../context/softDrinkContext";

export default function AddonItem({ softDrink, index }) {
  const context = useContext(softDrinkContext);
  const { softDrinksQuantity } = context;
  const [quantity, setQuantity] = useState({
    id: "",
    quantity: "",
  });
  // handle whcn clicked on add icon
  const handleAdd = (e, id) => {
    e.target.parentElement.style.display = "none";
    e.target.parentElement.nextSibling.style.display = "flex";
    setQuantity({
      id: id,
      quantity: 1,
    });
    softDrinksQuantity.push({ id: id, quantity: 1 });
  };

  //handle when clicked on either + or -
  const handleQuantity = (operator, e, id) => {
    const filteredSoftDrink = softDrinksQuantity.filter((softDrinkCheck) => {
      return softDrinkCheck.id === id;
    });
    if (operator === "+") {
      const newQuantity = quantity.quantity + 1;
      setQuantity({
        id: id,
        quantity: newQuantity,
      });
      filteredSoftDrink[0].quantity = newQuantity;
    } else {
      if (quantity.quantity === 0) {
        return;
      }
      const newQuantity = quantity.quantity - 1;
      setQuantity({
        id: id,
        quantity: newQuantity,
      });
      filteredSoftDrink[0].quantity = newQuantity;
    }
  };
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
        <span onClick={(e) => handleAdd(e, softDrink._id)}>+ Add</span>
      </div>
      <div className="addon-quantity" style={{ display: "none", width: "7vw" }}>
        <Remove onClick={(e) => handleQuantity("-", e, softDrink._id)} />
        <span>{quantity.quantity}</span>
        <Add onClick={(e) => handleQuantity("+", e, softDrink._id)} />
      </div>
    </>
  );
}
