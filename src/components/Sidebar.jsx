import React, { useState } from "react";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Sidebar = ({ activeSection, setActiveSection }) => {
  // sections for user application form
  const sections = [
    "General Info",
    "Enrollment Details",
    "Academic Background",
    "Academic Info",
    "Placement",
    "Co-Curricular and Extra-Curricular Activities",
    "Miscallaneous",
  ];

  // State for menu
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <Box
        component={motion.div}
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          display: { xs: "none", sm: "flex" }, // Hide on small screens
          width: "250px",
          height: "100vh",
          backgroundColor: "#b70924",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {sections.map((text, index) => (
          <Button
            key={index}
            fullWidth
            onClick={() => setActiveSection(index)}
            sx={{
              my: 1,
              backgroundColor: activeSection === index ? "#fff" : "transparent",
              color: activeSection === index ? "#b70924" : "#fff",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#fff", color: "#b70924" },
            }}
          >
            {text}
          </Button>
        ))}
      </Box>

      {/* Three-dot menu for smaller screens */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" }, // Show only on small screens
          position: "fixed",
          top: "64px", // Adjust to avoid collision with navbar
          right: "10px",
        }}
      >
        <IconButton
          aria-label="menu"
          aria-controls="mobile-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          sx={{ color: "#b70924" }}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="mobile-menu"
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          {sections.map((text, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                setActiveSection(index);
                handleMenuClose();
              }}
            >
              {text}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default Sidebar;
