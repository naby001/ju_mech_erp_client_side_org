import React, { useState } from "react";
import {
  Box,
  Typography,
} from "@mui/material";

//? Componenets of the regular user profile page 
import Navbar from "../components/Navbar";
import UserDetailsLeft from "../components/userDetails/UserDetailsLeft";
import UserDetailsRightGrade from "../components/userDetails/UserDetailsRightGrade";
import ProfessionalElective from "../components/userDetails/ProfessionalElective";
import OpenElective from "../components/userDetails/OpenElective";
import Projects from "../components/userDetails/Projects";
import Club from "../components/userDetails/Club";

//? Static details of the component page
export default function UserProfile() {
  const [user, setUser] = useState({
    fullName: "Abhirup Guha Roy",
    year: "2nd Year",
    roll: "002311201100",
    phone: "+91 8910232532",
    email: "johndoe@example.com",
    avatar: "/default-avatar.png", // Replace with the actual avatar path
  });

  const sgpaData = [
    { semester: "Semester 1", sgpa: "8.5" },
    { semester: "Semester 2", sgpa: "8.7" },
    { semester: "Semester 3", sgpa: "8.9" },
    { semester: "Semester 4", sgpa: "9.0" },
    // Add more semesters as needed
  ];

  const professionalElectives = [
    "Advanced Robotics",
    "Thermal Engineering",
    "Automobile Engineering",
  ];

  const openElectives = [
    "Introduction to Psychology",
    "Environmental Science",
    "Entrepreneurship Development",
  ];

  const clubs = [
    {
      name: "Robotics Club",
      description: "A club for robotics enthusiasts to build and innovate.",
      image: "/path/to/robotics-club.jpg",
    },
    {
      name: "Coding Club",
      description: "A club for coders to collaborate and learn new technologies.",
      image: "/path/to/coding-club.jpg",
    },
    {
      name: "Drama Club",
      description: "A club for students passionate about acting and theater.",
      image: "/path/to/drama-club.jpg",
    },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        overflow: "hidden", // Prevent horizontal scrolling
      }}
    >
      <Navbar />
      <Box sx={{ display: "flex", height: "calc(100vh - 64px)", mt: "64px" }}>
        {/* Left Column: Fixed Side Profile */}
        <Box
          sx={{
            position: "fixed",
            top: "64px", // Adjust for the height of the Navbar
            left: 0,
            width: "25%", // Adjust width as needed
            height: "calc(100vh - 64px)",
            backgroundColor: "rgba(183, 9, 36, 1)",
            padding: "20px",
            borderRight: "1px solid #ddd",
            color: "#fff",
            overflowY: "auto", // Allow scrolling if content overflows
          }}
        >
          <UserDetailsLeft user={user} />
        </Box>

        {/* Right Column: Scrollable Main Content */}
        <Box
          sx={{
            marginLeft: "25%", // Matches the width of the left column
            width: "75%", // Remaining width
            padding: "20px",
            overflowY: "auto", // Enable vertical scrolling
            height: "calc(100vh - 64px)",
          }}
        >
          {/* Main Content */}
          <Typography variant="h4" component="h1" sx={{fontWeight: "bold"}} gutterBottom>
            Welcome, {user.fullName}
          </Typography>
          {/* Grade details of the user */}
          <UserDetailsRightGrade sgpaData = {sgpaData}/>
          {/* Professional Electives Section */}
          <ProfessionalElective electives={professionalElectives} />
          {/* Open Electives Section */}
          <OpenElective electives={openElectives} />
          {/* Projects done by the candidate */}
          <Projects />
          {/* Clubs joined by the candidate */}
          <Club clubs={clubs} />
        </Box>
      </Box>
    </Box>
  );
}