import React from 'react'
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
} from "@mui/material";

function UserDetailsRightGrade({sgpaData}) {
  return (
    <Box sx={{mb:2}}>
      <Typography variant="h6" component="h2" gutterBottom>
        Semester-wise SGPA
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Semester</b></TableCell>
              <TableCell><b>SGPA</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sgpaData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.semester}</TableCell>
                <TableCell>{row.sgpa}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default UserDetailsRightGrade
