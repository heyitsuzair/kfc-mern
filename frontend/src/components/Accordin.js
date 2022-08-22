import * as React from "react";
import {
  Grid,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "@mui/material";
import { ExpandMore, AddCircle } from "@mui/icons-material";
import Map from "./Map";
import MyKfcLocations from "./MyKFC/MyKfcLocations";
import MyKfcAddLocation from "./MyKFC/MyKfcAddLocation";
import { useEffect } from "react";
import { useContext } from "react";
import locationContext from "../context/locationContext";

export default function SimpleAccordion() {
  const context = useContext(locationContext);
  const {
    getLocations,
    setValue,
    setDisplaySections,
    setTagIndex,
    setLocationState,
    displaySections,
    locations,
  } = context;
  const user = JSON.parse(localStorage.getItem("user"));

  const clickSelecDifLoc = () => {
    setDisplaySections({ first: "flex", second: "none" });
    setValue("");
    setLocationState("Add");
    setTagIndex(null);
  };

  useEffect(() => {
    getLocations();
    //eslint-disable-next-line
  }, [locations]);

  return (
    <div style={{ marginTop: "2rem" }}>
      <Accordion
        sx={{
          marginBottom: ".7rem",
          backgroundColor: "#1c1816",
          color: "white",
          borderRadius: "12px !important",
          padding: "1rem 0.4rem",
          fontFamily: "Poppins",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>Personal Info</h3>
        </AccordionSummary>
        <AccordionDetails>
          <h3>Email</h3>
          <span style={{ fontFamily: "Poppins" }}>{user.email}</span>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          marginBottom: ".7rem",
          backgroundColor: "#1c1816",
          color: "white",
          borderRadius: "12px !important",
          padding: "1rem 0.4rem",
          fontFamily: "Poppins",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>My Addresses</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            marginTop={2}
            columnSpacing={{ md: 2 }}
            rowSpacing={{ xs: 1 }}
          >
            <Grid item md={12} xs={12} sm={12}>
              <Map />
            </Grid>
            {/* Add User Location To Database */}
            <MyKfcAddLocation />
            {/* Add User Location To Database */}

            <Grid
              item
              display={displaySections.second}
              gap={2}
              flexDirection="row"
              justifyContent="space-between"
              md={12}
              sm={12}
              xs={12}
            >
              {/* User current locations available in database */}
              <MyKfcLocations />
              {/* User current locations available in database */}
            </Grid>
            <Grid
              item
              display={displaySections.second}
              gap={2}
              flexDirection="row"
              justifyContent="flex-start"
              md={12}
              sm={12}
              xs={12}
              sx={{ cursor: "pointer" }}
            >
              <div className="address-icon">
                <AddCircle />
              </div>
              <div className="select-dif-loc" onClick={clickSelecDifLoc}>
                <span>Select A Different Location</span>
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
