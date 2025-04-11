import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

export default function UserDetailsLeft({ user }) {
  return (
    <Box
      sx={{
        padding: "20px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Avatar
        src={user.avatar}
        alt={user.fullName}
        sx={{ width: 120, height: 120, margin: "0 auto 20px" }}
      />
      <Typography variant="h5" component="h2" gutterBottom>
        {user.fullName}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <b>Year:</b> {user.year}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <b>Roll:</b> {user.roll}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <b>Phone:</b> {user.phone}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <b>Email:</b> {user.email}
      </Typography>
    </Box>
  );
}