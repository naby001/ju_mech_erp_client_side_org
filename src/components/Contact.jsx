import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";

export default function ContactUs() {
  return (
    <Box sx={{ mt: 6, textAlign: 'center', padding: '20px', backgroundColor: '#b70924', borderRadius: '8px', color: '#fff' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'left', padding: '20px' }}>
            <Typography variant="h6" component="h3" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              <b>Email:</b> support@jumperp.com
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              <b>Phone:</b> +1-800-123-4567
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              <b>Address:</b> 1234 University Ave, City, State, ZIP
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component="form" sx={{ backgroundColor: 'rgba(255, 255, 255, 0)', padding: '20px', borderRadius: '8px' }}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="dense"
              InputProps={{
                style: {
                  borderColor: 'rgba(255, 255, 255, 0.7)',
                  color: '#fff',
                },
              }}
              InputLabelProps={{
                style: {
                  color: '#fff',
                },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="dense"
              InputProps={{
                style: {
                  borderColor: 'rgba(255, 255, 255, 0.7)',
                  color: '#fff',
                },
              }}
              InputLabelProps={{
                style: {
                  color: '#fff',
                },
              }}
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="dense"
              multiline
              rows={4}
              InputProps={{
                style: {
                  borderColor: 'rgba(255, 255, 255, 0.7)',
                  color: '#fff',
                },
              }}
              InputLabelProps={{
                style: {
                  color: '#fff',
                },
              }}
            />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}