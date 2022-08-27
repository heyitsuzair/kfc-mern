import React from "react";
import { TextField } from "@mui/material";

export default function PhoneNumber({ phoneValue, setPhoneValue }) {
  const handleChange = (e) => {
    setPhoneValue(e.target.value);
  };
  return (
    <div className="checkout-item">
      <div
        className="delivery-head"
        style={{
          marginBottom: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <strong>Phone Number</strong>
      </div>
      <div className="phone-no">
        <TextField
          id="filled-basic"
          label="Phone Number"
          variant="filled"
          value={phoneValue}
          onChange={(e) => handleChange(e)}
          required={true}
          type={"tel"}
          sx={{
            backgroundColor: "#343434",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            fontWeight: "bolder",
            marginBottom: "1rem",
            paddingRight: "0",
            width: "50%",
          }}
          inputProps={{ className: "floatingInput" }}
          InputLabelProps={{
            className: "floatingLabel",
          }}
          color="error"
        />
      </div>
    </div>
  );
}
