import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import GoogleIcon from "@mui/icons-material/Google";
import JULogo from "../assets/julogo.png";
import { useDispatch } from "react-redux";
import { setLogin, setLogout } from "../state";
import { useNavigate } from "react-router-dom";
// UI Constants
const PRIMARY_COLOR = "#b70924";
const WHITE = "#ffffff";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });

  // Responsive Hook
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch=useDispatch();
 // dispatch(setLogout());
  const navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response=await fetch(isLogin?`http://localhost:5000/users/login`:`http://localhost:5000/users/signup`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
      });
      const returneddata=await response.json();
      dispatch(setLogin({user:returneddata.user,token:returneddata.token}));
      navigate('/');
    } catch (error) {
      
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In Clicked");
    // Implement Google OAuth Redirect here
  };

  return (
    <Container
    sx={{
      minHeight: "100vh",
      width: "100vw",  // Ensure it spans the full width
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 2, // Optional: removes default padding
      backgroundColor:"#b70924"
    }}
    maxWidth={false}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        style={{
          height:isMobile?'80%':'20%',
        }}
      >
         <Paper
      elevation={10}
      sx={{
        padding: isMobile ? 3 : 5,
        borderRadius: 4,
        textAlign: "center",
        bgcolor: "white",
        height: isMobile ? "60vh" : "auto", // 80% of the screen height on mobile
        width: isMobile ? "90vw" : "auto", // Optional: Make it more responsive
      }}
    >
      <img src={JULogo} style={{width:!isMobile?300:200, height:!isMobile?60:40}}/>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            fontWeight="bold"
            color={PRIMARY_COLOR}
            mb={2}
          >
            {isLogin ? "Login to Your Account" : "Create an Account"}
          </Typography>

          <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
            {!isLogin && (
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                margin="dense"
                sx={{
                  bgcolor: "#f9f9f9",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": { borderRadius: 2 },
                }}
              />
            )}

            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="dense"
              sx={{
                bgcolor: "#f9f9f9",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": { borderRadius: 2 },
              }}
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              name="password"
              value={formData.password}
              onChange={handleChange}
              margin="dense"
              sx={{
                bgcolor: "#f9f9f9",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": { borderRadius: 2 },
              }}
            />

            <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  bgcolor: PRIMARY_COLOR,
                  color: WHITE,
                  fontWeight: "bold",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  padding: isMobile ? "10px" : "12px",
                  borderRadius: 3,
                }}
              >
                {isLogin ? "Login" : "Sign Up"}
              </Button>
            </motion.div>
          </form>

          <Divider sx={{ my: 3 }} />

          {/* Sexy Custom Google Button */}
          <motion.div
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)",
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <Button
              fullWidth
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: isMobile ? "10px" : "12px",
                fontWeight: "bold",
                fontSize: isMobile ? "0.9rem" : "1rem",
                color: "#000",
                bgcolor: "#fff",
                border: "2px solid #ddd",
                borderRadius: 3,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  borderColor: PRIMARY_COLOR,
                  color: PRIMARY_COLOR,
                },
              }}
              onClick={handleGoogleSignIn}
            >
              <GoogleIcon sx={{ fontSize: isMobile ? "22px" : "24px" }} />
              {isLogin ? "Login with Google" : "Sign Up with Google"}
            </Button>
          </motion.div>

          <Typography
            variant="body2"
            sx={{
              mt: 2,
              cursor: "pointer",
              color: PRIMARY_COLOR,
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </Typography>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default AuthPage;
