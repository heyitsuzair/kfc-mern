import React from "react";
import { Container } from "@mui/system";
import { Grid, Box } from "@mui/material";
import logo from "../images/KFC-Logo-Red.png";
import { YouTube, Instagram, Facebook } from "@mui/icons-material";
import { Link } from "react-router-dom";
import appStore from "../images/app-store.png";
import googleStore from "../images/google-store.png";

export default function Footer() {
  return (
    <footer id="footer">
      <Container>
        <Grid
          container
          sx={{ marginBottom: "5rem" }}
          spacing={4}
          justifyContent="center"
          alignItems="center"
          gridTemplateColumns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid
            textAlign="center"
            item
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <img src={logo} alt="KFC" className="footer-logo" />
            </Box>
          </Grid>
          <Grid item alignItems="center" className="footer-box-cont">
            <Box id="footer-box"></Box>
          </Grid>
          <Grid textAlign="center" item>
            <span>Find Us On</span>
            <div className="footer-icons" style={{ marginTop: "1rem" }}>
              <div className="icon-item">
                <Link to="/" className="youtube">
                  <YouTube fontSize="large" />
                </Link>
              </div>
              <div className="icon-item">
                <Link to="/" className="insta">
                  <Instagram fontSize="large" />
                </Link>
              </div>
              <div className="icon-item">
                <Link to="/" className="fb">
                  <Facebook fontSize="large" />
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={17}
          gridTemplateColumns={{ xs: 12, sm: 12, md: 12 }}
          justifyContent="center"
        >
          <Grid item xs={5} sm={5} md={3}>
            <div>
              <strong>Information</strong>
            </div>
            <div className="footer-links">
              <Link to="/">About Us</Link>
            </div>
            <div className="footer-links">
              <Link to="/">Mitao Bhook</Link>
            </div>
            <div className="footer-links">
              <Link to="/">Privacy</Link>
            </div>
            <div className="footer-links">
              <Link to="/">Careers</Link>
            </div>
          </Grid>
          <Grid item xs={5} sm={5} md={3}>
            <div>
              <strong>Location</strong>
            </div>
            <div className="footer-links">
              <Link to="/">Find A Store</Link>
            </div>
          </Grid>
          <Grid item xs={10} sm={10} md={3}>
            <div>
              <strong>Get In Touch</strong>
            </div>
            <div className="footer-links">
              <Link to="/">Terms & Conditions</Link>
            </div>
          </Grid>
          <Grid item xs={10} sm={10} md={3}>
            <div>
              <img src={appStore} alt="App Store" />
            </div>
            <div className="footer-links">
              <img src={googleStore} alt="Google Store" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
