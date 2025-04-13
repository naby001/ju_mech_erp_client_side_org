import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

function Projects() {
  const projectData = [
    {
      type: "Major",
      mode: "Offline",
      duration: "6 months (2023)",
      grading: "Graded",
      supervisor: "Dr. John Doe",
      coSupervisor: "Dr. Jane Smith",
      sdg: "Yes",
      certificate: "View Certificate",
    },
    {
      type: "Minor",
      mode: "Online",
      duration: "3 months (2022)",
      grading: "Non-Graded",
      supervisor: "Dr. Emily Johnson",
      coSupervisor: "Dr. Mark Lee",
      sdg: "No",
      certificate: "View Certificate",
    },
    // Add more projects as needed
  ];

  return (
    <Box sx={{mb:2}}>
      <Typography variant="h4" component="h4" gutterBottom>
        Projects
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Type</b></TableCell>
              <TableCell><b>Mode</b></TableCell>
              <TableCell><b>Duration</b></TableCell>
              <TableCell><b>Grading</b></TableCell>
              <TableCell><b>Supervisor</b></TableCell>
              <TableCell><b>Co-Supervisor</b></TableCell>
              <TableCell><b>SDG</b></TableCell>
              <TableCell><b>Certificate</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectData.map((project, index) => (
              <TableRow key={index}>
                <TableCell>{project.type}</TableCell>
                <TableCell>{project.mode}</TableCell>
                <TableCell>{project.duration}</TableCell>
                <TableCell>{project.grading}</TableCell>
                <TableCell>{project.supervisor}</TableCell>
                <TableCell>{project.coSupervisor}</TableCell>
                <TableCell>{project.sdg}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="medium"
                    onClick={() => alert(`Viewing certificate for project ${index + 1}`)}
                  >
                    {project.certificate}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Projects;