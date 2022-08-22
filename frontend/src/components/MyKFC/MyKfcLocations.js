import React, { useContext } from "react";
import locationContext from "../../context/locationContext";
import MyKfcLocationItem from "./MyKfcLocationItem";

export default function MyKfcLocations() {
  const context = useContext(locationContext);
  const { locations } = context;

  return (
    <div className="my-locations">
      {locations.map((location, index) => {
        return (
          <div key={index} className="my-locations-item">
            <MyKfcLocationItem location={location} index={index} />
          </div>
        );
      })}
    </div>
  );
}
