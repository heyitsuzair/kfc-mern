import React from "react";
import { Container } from "@mui/system";
import { Grid, TextField, Button, Box } from "@mui/material";
import gif from "../images/login.gif";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useContext } from "react";
import userContext from "../context/userContext";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const context = useContext(userContext);
  const { setUser } = context;
  // handle callback response recieved from google
  const handleCallBackResponse = (response) => {
    const userObj = jwt_decode(response.credential);
    delete userObj.aud;
    delete userObj.azp;
    delete userObj.jti;
    delete userObj.sub;
    delete userObj.exp;
    delete userObj.iat;
    delete userObj.nbf;
    setUser(userObj);
    localStorage.setItem("user", JSON.stringify(userObj));
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
      return;
    }
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallBackResponse,
      auto_select: true,
    });
    google.accounts.id.renderButton(
      document.getElementById("login-with-google"),
      { theme: "outline", size: "large" }
    );
    // right top prompt
    google.accounts.id.prompt();
    //eslint-disable-next-line
  }, []);
  return (
    <div id="login-parent">
      <Container className="login">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          rowSpacing={1}
        >
          <Grid item md={6} sm={6} xs={12} textAlign="center">
            <img src={gif} id="gif" alt="Hello" />
          </Grid>
          <Grid item md={6} sm={6} xs={12} textAlign="center">
            <h1 style={{ marginBottom: "1rem", textAlign: "left" }}>
              Welcome!
            </h1>
            <form>
              <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                sx={{
                  backgroundColor: "#343434",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  fontWeight: "bolder",
                  marginBottom: "1rem",
                  paddingRight: "0",
                }}
                inputProps={{ className: "floatingInput" }}
                InputLabelProps={{
                  className: "floatingLabel",
                }}
                color="error"
              />
              <TextField
                id="filled-basic"
                label="Phone Number"
                variant="filled"
                sx={{
                  backgroundColor: "#343434",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  fontWeight: "bolder",
                  marginBottom: "1rem",
                  paddingRight: "0",
                }}
                inputProps={{
                  className: "floatingInput",
                }}
                InputLabelProps={{
                  className: "floatingLabel",
                }}
                color="error"
              />
              <Button variant="contained" id="login-btn" disabled>
                Login
              </Button>
              <div className="or-login-with">
                <div>
                  <Box
                    className="lines"
                    sx={{
                      backgroundColor: "#48413e",
                    }}
                  />
                </div>
                <div>
                  <h5>Or</h5>
                </div>
                <div>
                  <Box
                    className="lines"
                    sx={{
                      backgroundColor: "#48413e",
                    }}
                  />
                </div>
              </div>
            </form>
            {!localStorage.getItem("user") && (
              <div className="login-with-google" id="login-with-google"></div>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
