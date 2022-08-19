import React, { useContext } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import locationContext from "../context/locationContext";

const containerStyle = {
  width: "100%",
  height: "400px",
};

export default function Map() {
  const context = useContext(locationContext);
  const { longitude, latitude } = context;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
  });
  const center = {
    lat: latitude,
    lng: longitude,
  };
  //eslint-disable-next-line
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    //eslint-disable-next-line
    []
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <Marker position={{ lat: latitude, lng: longitude }} />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}
