import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { toast } from "react-toastify";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map({ longitude, latitude, api }) {
  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 20,
  };

  useEffect(() => {
    if (longitude === 69.3451 && latitude === 30.3753) {
      toast.error("Please Allow Location From Browser");
    }
    //eslint-disable-next-line
  }, [longitude, latitude]);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "100%", marginTop: "1rem" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: api }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={latitude} lng={longitude} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
