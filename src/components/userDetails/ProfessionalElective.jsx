import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

export default function ProfessionalElective({ electives }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h4" component="h4" gutterBottom>
        Professional Electives
      </Typography>
      <Grid container spacing={2}>
        {electives.map((elective, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="body1" component="p">
                  {elective}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}