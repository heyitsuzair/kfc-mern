import React from "react";
import {
  HomeOutlined,
  Delete,
  Edit,
  Apartment,
  BusinessCenterOutlined,
} from "@mui/icons-material";

export default function MyKfcLocations({ locations }) {
  const handleDelete = async (id) => {
    console.log(id);
  };
  return (
    <div className="my-locations">
      {locations.map((location, index) => {
        return (
          <div key={index} className="my-locations-item">
            <div className="address-icon">
              {location.tag === "0" ? <HomeOutlined /> : ""}
              {location.tag === "1" ? <BusinessCenterOutlined /> : ""}
              {location.tag === "2" ? <Apartment /> : ""}
            </div>
            <div className="address">
              <h3>{location.tag === "0" ? "Home" : ""}</h3>
              <h3>{location.tag === "1" ? "Office" : ""}</h3>
              <h3>{location.tag === "2" ? "Partner" : ""}</h3>
              <span style={{ fontFamily: "Poppins" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate autem nam nisi impedit eligendi et est reprehenderit
                eveniet porro ipsam, corrupti illum sint modi fugit, eum quasi
                officia voluptates doloribus quaerat vero aperiam iure. Amet at
                non ducimus voluptatem ipsum neque praesentium vitae ex ab?{" "}
              </span>
            </div>
            <div className="edit-address">
              <div className="del-add">
                <Delete onClick={() => handleDelete(location._id)} />
                Remove
              </div>
              <div className="edit-add">
                <Edit />
                Edit
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
