import React from "react";
import { ArrowDropDown } from "@mui/icons-material";
import { Modal, Typography, Box, Button } from "@mui/material";
import Map from "./Map";
import { useEffect } from "react";
import AutoComplete from "./AutoComplete";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: ".4rem",
};
export default function ModalFunc({
  longitude,
  latitude,
  setLongitude,
  setLatitude,
}) {
  const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_MAP_API_KEY;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {}, [longitude, latitude]);
  return (
    <div>
      <Button onClick={handleOpen}>
        Select Location <ArrowDropDown />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ backgroundColor: "white" }}
      >
        <Box sx={style} id="modal">
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Select Location
          </Typography>

          <Map
            longitude={longitude}
            api={GOOGLE_MAPS_API_KEY}
            latitude={latitude}
          />

          <AutoComplete
            setLongitude={setLongitude}
            setLatitude={setLatitude}
            api={GOOGLE_MAPS_API_KEY}
            style={{ width: "100%" }}
          />
        </Box>
      </Modal>
    </div>
  );
}
