import React from "react";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function PhoneNumber({ phoneValue, setPhoneValue }) {
  const handleChange = (e) => {
    setPhoneValue(e.target.value);
  };
  const { t } = useTranslation();
  return (
    <div className="checkout-item" style={{ marginBottom: "2rem" }}>
      <div
        className="delivery-head"
        style={{
          marginBottom: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <strong>{t("phnNo")}</strong>
      </div>
      <div className="phone-no">
        <TextField
          id="filled-basic"
          label={t("phnNo")}
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
            width: "99%",
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
