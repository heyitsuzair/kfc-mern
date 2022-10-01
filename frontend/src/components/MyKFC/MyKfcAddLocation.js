import React from "react";

import AutoComplete from "../commons/AutoComplete";
import { TextField, Grid, Button } from "@mui/material";
import Tags from "../commons/Tags";
import { toast } from "react-toastify";
import { useContext } from "react";
import locationContext from "../../context/locationContext";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function MyKfcAddLocation() {
  const context = useContext(locationContext);
  const {
    getLocation,
    longitude,
    latitude,
    displaySections,
    setDisplaySections,
    setLocations,
    locations,
    value,
    setValue,
    tagIndex,
    setTagIndex,
    locationState,
    locationId,
  } = context;
  const user = JSON.parse(localStorage.getItem("user"));

  // handle when clicked on cancel button
  const handleCancel = () => {
    getLocation();
    setDisplaySections({
      first: "none",
      second: "flex",
    });
  };

  const { t } = useTranslation();

  // handle when clicked on done button
  const handleDone = async () => {
    if (tagIndex === null) {
      toast.warning("Please Select A Tag");
      return;
    } else if (value === "") {
      toast.warning("Please Type House No.");
      return;
    }
    if (locationState === "Add") {
      await axios
        .post(process.env.REACT_APP_BACKEND + "/api/location/addLocation", {
          lat: latitude,
          lng: longitude,
          email: user.email,
          tag: tagIndex,
          street: value,
        })
        .then((res) => {
          if (res.data.error === false) {
            setDisplaySections({
              first: "none",
              second: "flex",
            });
            setLocations(
              locations.concat({
                lat: latitude,
                lng: longitude,
                email: user.email,
                tag: tagIndex,
                street: value,
              })
            );
            setValue("");
            setTagIndex(null);
          }
        });
    } else {
      await axios
        .post(process.env.REACT_APP_BACKEND + "/api/location/editLocation", {
          id: locationId,
          lat: latitude,
          lng: longitude,
          tag: tagIndex,
          street: value,
        })
        .then((res) => {
          if (res.data.error === false) {
            setDisplaySections({
              first: "none",
              second: "flex",
            });
            setValue("");
            setTagIndex(null);
            // edit the location info realtime so it doesnot requires to refresh browser
            const setLocation = locations.filter((loc) => {
              return loc._id === locationId;
            });
            setLocation[0].lat = latitude;
            setLocation[0].lng = longitude;
          }
        });
    }
  };

  // handle when house number value changes
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const tags = [
    {
      tag: t("home"),
    },
    {
      tag: t("office"),
    },
    {
      tag: t("partner"),
    },
  ];

  // handle when clicked on any tag
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
            required
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
            name="field"
            value={value}
            onChange={(e) => handleChange(e)}
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
          {t("cancel")}
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
          {t("save")}
        </Button>
      </Grid>
    </>
  );
}
