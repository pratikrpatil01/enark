import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid2, Button } from "@mui/material";
import logo from "../assets/enark-logo.jpg";
import { styled } from "@mui/styles";
import { Link, NavLink } from "react-router-dom";

const Logo = styled("img")({
  height: 40, // Adjust the height as needed
  marginRight: 16, // Add space between the logo and the menu button
});
export default function Header() {
  return (
    <AppBar position="static">
      {/* <Toolbar> */}
      <Grid2 container alignItems="center" justifyContent="space-between">
        <Grid2 item>
          <Grid2 container alignItems="center" sx={{ marginLeft: "16px" }} component={NavLink} to="/">
            <Logo src={logo} alt="Logo" />
          </Grid2>
        </Grid2>
        <Grid2 item>
          <Link />
          <Button color="inherit" component={NavLink} to="/home">
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/weather">
          Weather
          </Button>
          <Button color="inherit" component={NavLink} to="/contact-us">
            Contacts
          </Button>
          <Button color="inherit" component={NavLink} to="/blogs">
            Blogs
          </Button>
        </Grid2>
      </Grid2>
      {/* </Toolbar> */}
    </AppBar>
  );
}
