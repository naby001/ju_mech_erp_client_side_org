import React, { useState } from "react";
import { TextField, Button, Box, Typography, useMediaQuery } from "@mui/material";

const Requests = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  const [formData, setFormData] = useState({
    fullName: "",
    requestDetails: "",
    shortWriteup: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add API call or form submission logic here
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        overflowY: isMobile ? "auto" : "hidden",
        backgroundColor: "white",
        borderRadius: 10,
        p: 5,
        alignItems: "flex-start", // Ensures left alignment
      }}
    >
      <Box 
        sx={{ 
          width: "70%", 
          maxWidth: "900px", // Prevents excessive width on large screens
          minWidth: isMobile ? "90%" : "90%", // Adjusts for mobile screens
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#b70924" }}>
          Request Endorsement
        </Typography>

        <form onSubmit={handleSubmit} style={{ marginTop: 40 }}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />

          <TextField
            fullWidth
            label="What are you requesting?"
            name="requestDetails"
            value={formData.requestDetails}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            multiline
            rows={3}
          />

          <TextField
            fullWidth
            label="Short Writeup"
            name="shortWriteup"
            value={formData.shortWriteup}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            multiline
            rows={5} // Increased height
            InputProps={{
              style: { verticalAlign: "top" }, // Ensures typing starts from the top-left
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "#b70924",
              "&:hover": { backgroundColor: "#96071e" },
            }}
          >
            Submit Request
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Requests;
