import React from "react";
import { Avatar, IconButton } from "@mui/material";

export default function BtnBoxIcon({ icon, display, ...props }) {
  return (
    <Avatar variant="square" 
      sx={{ 
        width: "35px",
        border: "1px solid #bebec0",
        display: display,
        bgcolor: "white",
        color: "inherit",
        height: "30px",
        borderRadius: "6px",
        ml: "2px"
      }} {...props}>
      <IconButton color="inherit">{icon}</IconButton>
    </Avatar>
  );
}
