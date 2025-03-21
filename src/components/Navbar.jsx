"use client";

import { AppBar, Toolbar, Typography, Box, Button, Avatar } from "@mui/material";

<<<<<<< HEAD
export default function Navbar({ user }) {
=======
export default function Navbar({  }) {
  const user=useSelector((state)=>state.user);
  console.log(user);
>>>>>>> 4166446 (Revert "Merge branch 'main' into main")
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#b70924" }}>
      <Toolbar sx={{ minHeight: "50px", display: "flex", justifyContent: "space-between" }}>
        {/* Left: User Full Name */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
         Student Portfolio
        </Typography>

        {/* Right: Sign In, Sign Up, and User Avatar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
<<<<<<< HEAD
          <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
            User
          </Typography>
          <Avatar
            src={user?.avatar || "/default-avatar.png"}
            alt={user?.fullName}
            sx={{ width: 40, height: 40, cursor: "pointer" }}
=======
          {/* <Button color="inherit">Sign In</Button>
          <Button color="inherit">Sign Up</Button> */}
             <Typography  sx={{ fontWeight: "bold", fontSize:"15px" }}>
         {user.fullName}
        </Typography>
          <Avatar 
            src={user?.avatar || "/default-avatar.png"} 
            alt={user?.fullName} 
            sx={{ width: 40, height: 40 }}
>>>>>>> 4166446 (Revert "Merge branch 'main' into main")
          />
        </Box>
      </Toolbar>
    </AppBar>
    
  );
}
