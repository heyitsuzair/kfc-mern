import React from "react";
import { Button } from "@mui/material";

import { Done } from "@mui/icons-material";
export default function Tags({ label, handleClick, variant, index }) {
  return (
    <>
      <Button
        className="tags"
        variant={variant}
        onClick={() => handleClick(index)}
        color="error"
      >
        {variant === "contained" ? <Done fontSize="small" /> : ""}
        {label}
      </Button>
    </>
  );
}
