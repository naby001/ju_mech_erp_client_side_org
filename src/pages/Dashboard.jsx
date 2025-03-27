"use client";

import { useState } from "react";
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { Menu, Dashboard, Help, AccountCircle, ExitToApp, Home, CottageRounded, ArticleRounded, ArrowBackIosNew } from "@mui/icons-material";
import MultiStepForm from "./student_form";
import Navbar from "../components/Navbar";
import Requests from "../components/Requests";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function DashboardPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [selectedTab,setselectedTab]=useState('My Details');

  const navigate=useNavigate();

  const drawer = (
    <Box sx={{ bgcolor: "#b70924", height: "100vh", color: "white"}}>
      <Box sx={{display:'flex', justifyContent:'flex-start', flexDirection:'row', alignItems:'center',  mt:5, mb:2, gap:2}}>
       {!isMobile&&( <ArrowBackIosNew onClick={() => navigate(-1)}/>)}
      <Typography variant="h5" sx={{ textAlign: "center", ml:isMobile?3:0}}>
        My Dashboard
      </Typography>
      </Box>
      <List>
  {[
   { text: "My Details", icon: 
    <CottageRounded 
        sx={{
            color: selectedTab === "My Details" ? "black" : "white",
            fontSize: selectedTab === "My Details" ? "2rem" : "1.5rem", // Size increase
            transition: "font-size 0.3s ease-in-out" // Smooth animation
        }} 
    /> 
},

{ text: "My Requests", icon: 
    <ArticleRounded 
        sx={{
            color: selectedTab === "My Requests" ? "black" : "white",
            fontSize: selectedTab === "My Requests" ? "2rem" : "1.5rem", // Size increase
            transition: "font-size 0.3s ease-in-out" // Smooth animation
        }} 
    /> 
},
    { text: "Profile", icon: <AccountCircle /> },
    { text: "Logout", icon: <ExitToApp /> },
  ].map((item, index) => (
    <ListItem key={index} disablePadding>
      <ListItemButton
        sx={{
         // borderRadius: 2,
          //transition: "all 0.3s ease-in-out",
          //"&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
          bgcolor: selectedTab === item.text ? "white" : "transparent",
          width: selectedTab === item.text ? "100%" : "auto", // Extend the button width when selected
          borderTopLeftRadius: selectedTab === item.text ? 16 : 0, // Remove top-right radius
          borderBottomLeftRadius: selectedTab === item.text ? 16 : 0, // Remove bottom-right radius
          position: "relative", // Needed for pseudo-element
    overflow: "visible", // Allow the curve to extend beyond the button
        }}
        onClick={() => {
          setselectedTab(item.text);
        }}
      >
      
        <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} sx={{color:selectedTab===item.text?"black":"white"}} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

    </Box>
  );

  return (
    <Box sx={{ display: "flex",bgcolor: "#b70924", p:1 }}>
      <CssBaseline />
      {/* Top AppBar */}
      {isMobile && (
  <AppBar position="fixed" sx={{ bgcolor: "transparent", boxShadow: "none" }}>
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      {/* Burger Menu for Mobile */}
      <IconButton edge="start" color="white" aria-label="menu" sx={{ display: { md: "none" }, backgroundColor:'#b70924' }} onClick={handleDrawerToggle}>
      <Menu sx={{ color: "white", fontSize: "2.5rem" }} />

      </IconButton>
    </Toolbar>
  </AppBar>
)}

      {/* Sidebar for Desktop */}
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 }  }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": { width: drawerWidth, transition: "all 0.3s ease-in-out" },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": { width: drawerWidth, position: "relative", transition: "all 0.3s ease-in-out",backgroundColor: "inherit", borderRight: "none", // Ensures no line appears on the right
              boxShadow: "none",  },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content Area */}
     
    {selectedTab === "My Details" && <MultiStepForm />}
    {selectedTab==="My Requests" && <Requests/>}
  
    </Box>
  );
}
