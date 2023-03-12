// import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
// //  import MenuIcon from "@material-ui/icons/Menu";
// import React from "react";

// const Navbar = () => { return (
//    <AppBar position="static">
//     <Toolbar>
//         {/* <IconButton color="inherit">
//             <MenuIcon/>
//         </IconButton> */}
//         <Typography>
//             livescore 
//         </Typography>
//     </Toolbar>

//    </AppBar>
// )

// };

//  export default Navbar
 import React from "react";
 import AppBar from "@material-ui/core/AppBar";
 import {
   Button,
   IconButton,
   makeStyles,
   Toolbar,
   Typography,
 } from "@material-ui/core";

 import MenuIcon from "@material-ui/icons/Menu";
 
 const useStyle = makeStyles((theme) => {
   console.log("STYLE", theme);
 });
 
 const Navbar = () => {
   const classes = useStyle();
 
   return (
     <div>
       <AppBar color="primary" position="static" style={{ flexFlow: 1 }}>
         <Toolbar>
           <IconButton edge="start" color="inherit">
             <MenuIcon />
           </IconButton>
 
           <Typography variant="h6">Live Score </Typography>
 
           <span style={{ flexGrow: 1 }}></span>
 
           <Button color="inherit">Login</Button>
         </Toolbar>
       </AppBar>
     </div>
   );
 };
 
 export default Navbar;