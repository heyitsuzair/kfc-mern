import React from "react";
import { TextField } from "@mui/material";
export default function CardDetail({ handleChange, value }) {
  return (
    <div className="card-detail">
      <h4>Enter Card Details</h4>
      <div className="card-detail-inner">
        <div className="card-detail-content">
          <TextField
            id="filled-basic"
            label="Card Number"
            variant="filled"
            value={value.cardNo}
            onChange={(e) => handleChange(e)}
            required={true}
            type="text"
            name="cardNo"
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
          <TextField
            id="filled-basic"
            label="MM/YY"
            variant="filled"
            value={value.monthyear}
            onChange={(e) => handleChange(e)}
            required={true}
            type="text"
            name="monthyear"
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
        <div>
          <TextField
            id="filled-basic"
            label="CVV"
            variant="filled"
            value={value.cvv}
            onChange={(e) => handleChange(e)}
            required={true}
            type="text"
            name="cvv"
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
    </div>
  );
}
