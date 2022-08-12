import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Favorite, AddCircle } from "@mui/icons-material";
import img from "../images/topsel1.png";

export default function BasicCard() {
  return (
    <Card
      sx={{ minWidth: 275, backgroundColor: "#1c1816", borderRadius: "10px" }}
    >
      <CardContent className="fav-card">
        <div className="fav-icon">
          <Favorite sx={{ color: "#e4002b" }} />
        </div>

        <div className="fav-img">
          <img src={img} width={100} alt="Favourite" />
        </div>
        <Typography
          variant="h6"
          sx={{ mb: 1.5, fontWeight: "700" }}
          color="white"
        >
          Krunch Burger
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          Lorem ipsum dolor sit voluptas212221
        </Typography>
        <div className="fav-price">
          <span>Rs 220</span>
          <div className="add-fav-to-bucket">
            <AddCircle sx={{ color: "#e4002b" }} />
            <span className="add-fav">Add</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
