import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Favorite, AddCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BasicCard({
  src,
  title,
  desc,
  price,
  id,
  handleRemoveFav,
}) {
  return (
    <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{ minWidth: 350, backgroundColor: "#1c1816", borderRadius: "10px" }}
      >
        <CardContent className="fav-card">
          <div className="fav-icon" onClick={(e) => handleRemoveFav(e, id)}>
            <Favorite
              sx={{ color: "#e4002b", "&:hover": { cursor: "pointer" } }}
            />
          </div>

          <div className="fav-img">
            <img src={src} width={100} alt="Favourite" />
          </div>
          <Typography
            variant="h6"
            sx={{ mb: 1.5, fontWeight: "700" }}
            color="white"
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            {desc.substring(0, 20)} ...
          </Typography>
          <div className="fav-price">
            <span>Rs {price}</span>
            <div className="add-fav-to-bucket">
              <AddCircle sx={{ color: "#e4002b" }} />
              <span className="add-fav">Add</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
