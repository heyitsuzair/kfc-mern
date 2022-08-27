import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Favorite, AddCircle, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import { useState } from "react";
import { useEffect } from "react";

export default function BasicCard({
  src,
  title,
  desc,
  price,
  id,
  handleRemoveFav,
}) {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const getUser = JSON.parse(localStorage.getItem("user"));
  const [edit, setEdit] = useState(false);
  const handleAdd = (e) => {
    e.preventDefault();

    dispatch(
      addToCart({
        product: { price, title, id, src },
        quantity: 1,
        email: getUser.email,
        addons: [],
        softDrinks: [],
        prod_id: id,
      })
    );
    setEdit(true);
  };
  useEffect(() => {
    // check if item already available in card than show edit button instead of add
    const find = cartItems.find((item) => item.prod_id === id);
    console.log(find);
    if (find !== undefined) {
      setEdit(true);
    } else {
      setEdit(false);
    }
    //eslint-disable-next-line
  }, [cartItems]);
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
            {edit === false ? (
              <div className="add-fav-to-bucket" onClick={(e) => handleAdd(e)}>
                <AddCircle sx={{ color: "#e4002b" }} />
                <span className="add-fav">Add</span>
              </div>
            ) : (
              <div className="add-fav-to-bucket">
                <Edit sx={{ color: "#e4002b" }} />
                <span className="add-fav">Edit</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
