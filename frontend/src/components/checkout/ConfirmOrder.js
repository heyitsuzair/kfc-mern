import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import locationContext from "../../context/locationContext";
import { toast } from "react-toastify";
import paymentContext from "../../context/paymentContext";

export default function ConfirmOrder({ phoneValue }) {
  const navigate = useNavigate();

  // get logged in user locations and check whether it is added or not
  const location_context = useContext(locationContext);
  const { locations, radioValue } = location_context;

  // get payment method and check whether it is selected or not
  const payment_context = useContext(paymentContext);
  const { paymentMethod } = payment_context;

  // handle when clicked on back
  const handleBack = () => {
    navigate("/cart");
  };
  // handle when clicked on confirm order
  const handleConfirm = () => {
    if (locations.length < 1) {
      toast.error("Please Add Location To Continue!");
      return;
    } else if (radioValue.value === "") {
      toast.error("Please Choose Location To Continue!");
      return;
    } else if (paymentMethod.value === "") {
      toast.error("Please Choose Payment Method To Continue!");
      return;
    } else if (phoneValue === "") {
      toast.error("Please Enter Your Phone Number!");
      return;
    } else if (phoneValue.length !== 11) {
      toast.error("Phone Number Must Contain 11 Digits!");
      return;
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        sx={{
          borderColor: "white !important",
          color: "white !important",
          borderRadius: "8px",
          padding: ".7rem 2.6rem",
        }}
        variant="outlined"
        onClick={handleBack}
      >
        Back
      </Button>
      <Button
        sx={{
          borderColor: "white !important",
          color: "white !important",
          borderRadius: "8px",
          padding: ".8rem 2.6rem",
          backgroundColor: "#e4002b !important",
          margin: "0 1rem",
        }}
        variant="contained"
        onClick={handleConfirm}
      >
        Confirm Order
      </Button>
    </div>
  );
}
