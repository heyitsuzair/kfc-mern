import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { toast } from "react-toastify";
import { LocationOn } from "@mui/icons-material";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map({ api, zoom, longitude, latitude }) {
  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: zoom,
  };

  useEffect(() => {
    if (longitude === 69.3451 && latitude === 30.3753) {
      toast.error("Please Allow Location From Browser");
    }
  }, [longitude, latitude]);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "100%", marginTop: "1rem" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: api }}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent
          lat={latitude}
          lng={longitude}
          text={<LocationOn color="error" />}
        />
      </GoogleMapReact>
    </div>
  );
}
