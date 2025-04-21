//? importing library components
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
} from "@mui/material";

//? Componenets of the regular user profile page 
import Navbar from "../components/Navbar";
import UserDetailsLeft from "../components/userDetails/UserDetailsLeft";
import UserDetailsRightGrade from "../components/userDetails/Grade";
import ProfessionalElective from "../components/userDetails/ProfessionalElective";
import OpenElective from "../components/userDetails/OpenElective";
import Projects from "../components/userDetails/Projects";
import Club from "../components/userDetails/Club";
import TechFests from "../components/userDetails/TechFests";
import Leadership from "../components/userDetails/Leadership";
import Skills from "../components/userDetails/Skills";
import SocialActivities from "../components/userDetails/SocialActivities";
import Seminar from "../components/userDetails/Seminar";
import CompetitiveExam from "../components/userDetails/CompetitiveExam";
import HigherStudy from "../components/userDetails/HigherStudy";
import Placement from "../components/userDetails/Placement";
import StartUp from "../components/userDetails/StartUp";

//? Static details of the component page
export default function UserProfile() {

  //* datas of the user
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  // useEffect(() => {
  //   console.log("UserProfile component mounted");
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //   }
  // }, []);

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
          <Typography variant="h3" component="h3" sx={{ fontWeight: "bold" }} gutterBottom>
            Welcome, {user.name}
          </Typography>
          {/* Grade details of the user */}
          {user.acedamicInfo?.grades !== undefined && <UserDetailsRightGrade user={user.acedamicInfo.grades} />}
          {/* Professional Electives Section */}
          {user.acedamicInfo?.selectedProfessional && <ProfessionalElective electives={user.acedamicInfo.selectedProfessional} />}
          {/* Open Electives Section */}
          {user.acedamicInfo?.selectedOpen && <OpenElective electives={user.acedamicInfo.selectedOpen} />}
          {/* Projects done by the candidate */}
          {user.acedamicInfo?.projectDetails && <Projects projectData={user.acedamicInfo.projectDetails} />}
          {/* Clubs joined by the candidate */}
          {user.curricularInfo?.clubs && <Club clubs={user.curricularInfo.clubs} />}
          {/* Tech fests participated by the candidate */}
          {user.curricularInfo?.techFests && <TechFests techFests={user.curricularInfo.techFests} />}
          {/* Leaderchip Roles */}
          {user.curricularInfo?.leadership && <Leadership leadership={user.curricularInfo.leadership} />}
          {/* Skills pursued by the user */}
          {user.curricularInfo?.skills && <Skills skills={user.curricularInfo.skills} />}
          {/* Social Actvities of the user */}
          {user.curricularInfo?.socialActivities && <SocialActivities socialActivities={user.curricularInfo.socialActivities} />}
          {/* Seminars attended by the user */}
          {user.curricularInfo?.seminars && <Seminar seminars={user.curricularInfo.seminars} />}
          {/* Competitive Exams attended by the user */}
          {user.careerProgression?.exams && <CompetitiveExam exams={user.careerProgression.exams} />}
          {/* Higher studies the user is pursueing */}
          {user.careerProgression?.higherStudy && <HigherStudy higherStudy={user.careerProgression.higherStudy} />}
          {/* Placement offers got by the user */}
          {user.careerProgression?.placement && <Placement placement={user.careerProgression.placement} />}
          {/* Startups */}
          {user.careerProgression?.startup && <StartUp startup={user.careerProgression.startup} />}

        </Box>
      </Box>
    </Box>
  );
}