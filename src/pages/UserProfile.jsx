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
import TechFests from "../components/userDetails/TechFests";

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
      name: "Mechatronics Club",
      role: "Technical Team Lead",
      accolades: ["Best Project Award 2023"],
      achievements: ["Developed a robotic arm"],
      image: "/path/to/robotics-club.jpg",
    },
    {
      name: "ISHRAE",
      role: "Technical Member",
      accolades: ["Best Design Award 2023","Best Paper Award 2023"],
      achievements: ["Participated in HVAC design competition"],
      image: "/path/to/coding-club.jpg",
    },
    {
      name: "Motosports Club",
      role: "Powertrain Team Member",
      accolades: ["Best Performance Award 2023"],
      achievements: ["Designed a fuel-efficient engine"],
      image: "/path/to/drama-club.jpg",
    },
  ];

  const techFests = [
    {
      name: "RoboFest 2023",
      organiser: "Tech University",
      eventType: "Robotics Competition",
      year: 2023,
      role: "Team Lead",
      teammates: ["Alice", "Bob", "Charlie"],
      outcome: "Winner",
    },
    {
      name: "CodeSprint 2022",
      organiser: "Code Academy",
      eventType: "Hackathon",
      year: 2022,
      role: "Participant",
      teammates: ["David", "Eve"],
      outcome: "Runner-up",
    },
    {
      name: "GreenTech Workshop",
      organiser: "EcoTech",
      eventType: "Workshop",
      year: 2021,
      role: "Attendee",
      teammates: [],
      outcome: "Certificate of Participation",
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
          {/* Primary user details of the user */}
          <UserDetailsLeft user={user} />
          {/* Edit profile option for the user */}
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
          <Typography variant="h3" component="h3" sx={{fontWeight: "bold"}} gutterBottom>
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
          {/* Tech fests participated by the candidate */}
          <TechFests techFests={techFests} />
          {/* Leaderchip Roles */}
        </Box>
      </Box>
    </Box>
  );
}