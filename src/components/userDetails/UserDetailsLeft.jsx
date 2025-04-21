import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit"; // Import the Edit icon
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

export default function UserDetailsLeft({ user }) {
  const navigate = useNavigate(); // Initialize useNavigate
  const handleEditClick = () => {
    navigate(`/updateform/${user.name}`); // Navigate to the edit profile page
  };

  return (
    <Box
      sx={{
        padding: "20px",
        color: "#fff",
        textAlign: "center",
        display: "flex", // Flexbox for vertical alignment
        flexDirection: "column", // Stack items vertically
        height: "100%", // Full height to push the button to the bottom
      }}
    >
      <Avatar
        src={user.avatar}
        alt={user.name}
        sx={{
          width: 120,
          height: 120,
          margin: "0 auto 20px",
          border: "10px solid #36454F", // Added border
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: Add shadow for better appearance
        }}
      />
      <Typography variant="h5" component="h2" gutterBottom>
        {user.name}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <b>Roll:</b> {user.rollNumber}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <b>Phone:</b> {user.mobileNo}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <b>Email:</b> {user.email}
      </Typography>

      {/* Edit Dashboard Button */}
      <Button
        variant="outlined"
        color="white"
        startIcon={<EditIcon />} // Add the Edit icon here
        sx={{
          marginTop: "auto", // Push the button to the bottom
          "&:hover": {
            backgroundColor: "#36454F", // Darker shade on hover
          },
        }}
        onClick={() => handleEditClick()} // Replace with actual functionality
      >
        Edit Dashboard
      </Button>
    </Box>
  );
}
