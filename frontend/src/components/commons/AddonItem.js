import React, { useContext, useEffect, useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import addonContext from "../../context/addonContext";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { increaseProdAddon } from "../../redux/cart/cartSlice";

export default function AddonItem({ addon, index, prod_id }) {
  const dispatch = useDispatch();
  const ref = useRef();
  const { cartItems } = useSelector((store) => store.cart);
  const context = useContext(addonContext);

  const { addonQuantity, setAddonQuantity } = context;
  const [quantity, setQuantity] = useState({
    addon: "",
    quantity: "",
  });
  // handle whcn clicked on add icon
  const handleAdd = (e, addon) => {
    e.target.parentElement.style.display = "none";
    e.target.parentElement.nextSibling.style.display = "flex";
    setQuantity({
      addon: addon,
      quantity: 1,
    });
    setAddonQuantity(addonQuantity.concat({ addon: addon, quantity: 1 }));
  };

  //handle when clicked on either + or -
  const handleQuantity = (operator, e, addon) => {
    // removing incoming addon from addon quantity
    const filteredAddon = addonQuantity.filter((addonCheck) => {
      return addonCheck.addon._id !== addon._id;
    });
    if (operator === "+") {
      const newQuantity = quantity.quantity + 1;
      setQuantity({
        addon: addon,
        quantity: newQuantity,
      });
      // adding addon again with new value to addon quantity
      setAddonQuantity(
        filteredAddon.concat({ addon: addon, quantity: newQuantity })
      );
    } else {
      if (quantity.quantity === 1) {
        return;
      }
      const newQuantity = quantity.quantity - 1;
      setQuantity({
        addon: addon,
        quantity: newQuantity,
      });
      setAddonQuantity(
        filteredAddon.concat({ addon: addon, quantity: newQuantity })
      );
    }
  };

  const checkAddon = (prod_id) => {
    const checkFilter = cartItems.find((item) => item.prod_id === prod_id);
    // check if product not exist in cart items then return it else set the addon value available already in cart

    if (checkFilter === undefined) {
      return;
    }
    const checkAddonInner = checkFilter.addons.find(
      (item) => item.addon._id === addon._id
    );

    if (checkAddonInner === undefined) {
      return;
    } else {
      ref.current.parentElement.style.display = "none";
      ref.current.parentElement.nextSibling.style.display = "flex";

      setQuantity({ addon, quantity: checkAddonInner.quantity });

      setAddonQuantity((addonQuantity) => [
        ...addonQuantity,
        {
          addon: checkAddonInner.addon,
          quantity: checkAddonInner.quantity,
        },
      ]);
    }
  };

  useEffect(() => {
    //check if addon is with product or not
    checkAddon(prod_id);
    //eslint-disable-next-line
  }, [prod_id]);

  return (
    <>
      <div className="img">
        <img src={addon.pic} alt="Addon" width={30} />
      </div>
      <div className="addon-name">
        <span>{addon.name}</span>
        <span className="addon-price">Rs {addon.price}</span>
      </div>
      <div
        className="addon-add"
        style={{ display: "flex", width: "15vw", justifyContent: "center" }}
      >
        <span onClick={(e) => handleAdd(e, addon)} ref={ref}>
          + Add
        </span>
      </div>
      <div
        className="addon-quantity"
        style={{ display: "none", width: "15vw", justifyContent: "center" }}
      >
        <Remove onClick={(e) => handleQuantity("-", e, addon)} />
        <span>{quantity.quantity}</span>
        <Add onClick={(e) => handleQuantity("+", e, addon)} />
      </div>
    </>
  );
}
