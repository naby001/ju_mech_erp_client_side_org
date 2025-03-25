"use client";

import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, Avatar, Menu, MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#b70924" }}>
      <Toolbar sx={{ minHeight: "50px", display: "flex", justifyContent: "space-between" }}>
        {/* Left: Logo or Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          JUMERP
        </Typography>

        {/* Center: Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/facilities">
            Facilities
          </Button>
          <Button color="inherit" component={Link} to="/faculty">
            Faculty
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Box>

        {/* Right: User Full Name and Avatar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
            {user.fullName}
          </Typography>
          <Avatar 
            src={user?.avatar || "/default-avatar.png"} 
            alt={user?.fullName} 
            sx={{ width: 40, height: 40, cursor: "pointer" }}
            onClick={handleMenuOpen}
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/auth" onClick={handleMenuClose}>
              Login
            </MenuItem>
            <MenuItem component={Link} to="/admin-login" onClick={handleMenuClose}>
              Administrative Login
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}