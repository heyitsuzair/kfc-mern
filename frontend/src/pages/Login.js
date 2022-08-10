import React from "react";
import { Container } from "@mui/system";
import { Grid, TextField, Button, Box } from "@mui/material";
import gif from "../images/login.gif";
import GoogleIcon from "../images/google-icon.svg";
export default function Login() {
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
                inputProps={{ className: "floatingInput" }}
                InputLabelProps={{
                  className: "floatingLabel",
                }}
                color="error"
              />
              <Button variant="contained" id="login-btn">
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
                  <h5>Or Login With</h5>
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
            <div className="login-with-google">
              <img src={GoogleIcon} alt="Google" />
            </div>
            <div className="guest">
              <strong>Continue As Guest User</strong>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
