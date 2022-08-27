import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Accordin from "../components/MyKFC/Accordin";
import PastOrders from "../components/MyKFC/PastOrders";
import Favourites from "../components/MyKFC/Favourites";
import { useNavigate } from "react-router-dom";
import MyKFCSkeleton from "../components/MyKFC/MyKFCSkeleton";
import axios from "axios";
export default function MyKfc() {
  document.title = "My KFC";
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(true);
  const [favs, setFavs] = useState([]);
  // get all favourites of logged in user
  const getFavs = async () => {
    try {
      await axios
        .get(process.env.REACT_APP_BACKEND + "/api/fav/getFavs/" + user.email)
        .then((res) => {
          setFavs(res.data.getFav);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
      return;
    }
    getFavs();
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      {loading === true ? (
        <MyKFCSkeleton />
      ) : (
        <div className="my-kfc">
          <div className="hello-sec">
            <Grid container>
              <Grid
                flexDirection="row"
                display="flex"
                gap=".7rem"
                item
                xs={2}
                md={6}
                sm={6}
              >
                <h1>Hello</h1>
                <h1>{user.name}</h1>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <Accordin />
            </Grid>
            <Grid item xs={12} md={12} sm={12} marginTop="2rem">
              <PastOrders />
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <Favourites favs={favs} setFavs={setFavs} />
            </Grid>
          </div>
        </div>
      )}
    </Container>
  );
}
