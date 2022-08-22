import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function ConfirmOrder() {
  const navigate = useNavigate();

  // handle when clicked on back
  const handleBack = () => {
    navigate("/cart");
  };
  // handle when clicked on confirm order
  const handleConfirm = () => {};

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
