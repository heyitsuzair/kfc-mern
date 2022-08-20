import React from "react";

import MyKfcLocationItem from "./MyKfcLocationItem";

export default function MyKfcLocations({
  locations,
  setLocations,
  setDisplaySections,
  setValue,
  setTagIndex,
  setLocationState,
}) {
  return (
    <div className="my-locations">
      {locations.map((location, index) => {
        return (
          <div key={index} className="my-locations-item">
            <MyKfcLocationItem
              setLocations={setLocations}
              location={location}
              locations={locations}
              setDisplaySections={setDisplaySections}
              setValue={setValue}
              setTagIndex={setTagIndex}
              setLocationState={setLocationState}
            />
          </div>
        );
      })}
    </div>
  );
}
