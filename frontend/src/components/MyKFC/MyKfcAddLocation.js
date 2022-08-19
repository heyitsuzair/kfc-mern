import React, { useState } from "react";

import AutoComplete from "../AutoComplete";
import { TextField, Grid, Button } from "@mui/material";
import Tags from "../Tags";
import { toast } from "react-toastify";

export default function MyKfcAddLocation({
  displaySections,
  setDisplaySections,
}) {
  // handle when clicked on cancel button
  const handleCancel = () => {
    setDisplaySections({
      first: "none",
      second: "flex",
    });
  };
  // handle when clicked on done button
  const handleDone = () => {
    if (tagIndex === null) {
      toast.warning("Please Select A Tag");
      return;
    }
  };
  const tags = [
    {
      tag: "Home",
    },
    {
      tag: "Office",
    },
    {
      tag: "Partner",
    },
    {
      tag: "Other",
    },
  ];
  const [tagIndex, setTagIndex] = useState(null);
  const handleClick = (index) => {
    setTagIndex(index);
  };
  return (
    <>
      <Grid item md={6} xs={12} sm={12} display={displaySections.first}>
        <div style={{ width: "100%" }}>
          <AutoComplete />
        </div>
      </Grid>
      <Grid item md={6} xs={12} sm={12} display={displaySections.first}>
        <div style={{ width: "100%" }}>
          <TextField
            id="filled-basic"
            label="House / Street No."
            variant="filled"
            sx={{
              backgroundColor: "rgb(52, 52, 52)",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
              fontWeight: "bolder",
              width: "100%",
              paddingRight: "0",
              marginTop: "16px",
            }}
            inputProps={{ className: "floatingInput" }}
            InputLabelProps={{
              className: "floatingLabel",
            }}
            color="error"
          />
        </div>
      </Grid>
      <Grid item xs={12} md={12} sm={12} display={displaySections.first}>
        <h3>Tags *</h3>
      </Grid>
      <Grid item display={displaySections.first}>
        {tags.map((tag, index) => {
          return (
            <span key={index}>
              <Tags
                handleClick={() => handleClick(index)}
                variant={index === tagIndex ? "contained" : "outlined"}
                label={tag.tag}
                index={index}
              />
            </span>
          );
        })}
      </Grid>
      <Grid
        item
        display={displaySections.first}
        xs={12}
        sm={12}
        md={12}
        justifyContent="flex-end"
      >
        <Button
          sx={{
            borderColor: "white !important",
            color: "white !important",
            borderRadius: "8px",
            padding: ".7rem 2.6rem",
          }}
          variant="outlined"
          onClick={handleCancel}
        >
          Cancel
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
          onClick={handleDone}
        >
          Done
        </Button>
      </Grid>
    </>
  );
}
