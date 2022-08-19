import React from "react";
import { HomeOutlined, Delete, Edit } from "@mui/icons-material";

export default function MyKfcLocations() {
  return (
    <>
      <div className="address-icon">
        <HomeOutlined />
      </div>
      <div className="address">
        <h3>Home</h3>
        <span style={{ fontFamily: "Poppins" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          autem nam nisi impedit eligendi et est reprehenderit eveniet porro
          ipsam, corrupti illum sint modi fugit, eum quasi officia voluptates
          doloribus quaerat vero aperiam iure. Amet at non ducimus voluptatem
          ipsum neque praesentium vitae ex ab?{" "}
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
    </>
  );
}
