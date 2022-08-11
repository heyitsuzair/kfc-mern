import * as React from "react";
import { useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Grid } from "@mui/material";
import {
  ExpandMore,
  HomeOutlined,
  Delete,
  Edit,
  AddCircle,
} from "@mui/icons-material";
import Map from "./Map";
import locationContext from "../context/locationContext";
import { useEffect } from "react";

export default function SimpleAccordion() {
  const context = useContext(locationContext);
  const { getLocation, latitude, longitude } = context;
  const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_MAP_API_KEY;
  useEffect(() => {
    getLocation();
  }, [getLocation]);

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
          <h3>Gender</h3>
          <span style={{ fontFamily: "Poppins" }}>Male</span>
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
          <Map
            longitude={longitude === 69.3451 ? 74.3587 : longitude}
            api={GOOGLE_MAPS_API_KEY}
            latitude={latitude === 30.3753 ? 31.5204 : latitude}
            zoom={13}
          />
          <Grid container marginTop={2}>
            <Grid
              item
              display="flex"
              gap={2}
              flexDirection="row"
              justifyContent="space-between"
              md={12}
              sm={12}
              xs={12}
            >
              <div className="address-icon">
                <HomeOutlined />
              </div>
              <div className="address">
                <h3>Home</h3>
                <span style={{ fontFamily: "Poppins" }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate autem nam nisi impedit eligendi et est
                  reprehenderit eveniet porro ipsam, corrupti illum sint modi
                  fugit, eum quasi officia voluptates doloribus quaerat vero
                  aperiam iure. Amet at non ducimus voluptatem ipsum neque
                  praesentium vitae ex ab?{" "}
                </span>
              </div>
              <div className="edit-address">
                <div className="del-add">
                  <Delete />
                  Remove
                </div>
                <div className="edit-add">
                  <Edit />
                  Edit
                </div>
              </div>
            </Grid>
            <Grid
              item
              display="flex"
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
              <div className="select-dif-loc">
                <span>Select A Different Location</span>
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
