import React from "react";
import { Box, Collapse } from "@mui/material";

export default function SearchBoxContainer({children}) {

  return (
    <Collapse in sx={{minHeight:'fit-content', height:'auto'}}>
      <Box sx={{ display: 'grid', gridTemplateColumns:'repeat(2, 1fr)', border:'1px solid #dde1ee'}}>
        <Box sx={{fontSize:'13px', gridRow:1, gridColumn:'span 2'}}>
          <Box sx={{m:'2px 12px 2px 4px', display:'inline-block', verticalAlign:'middle'}}>
            {children}
          </Box>
        </Box>
      </Box>
    </Collapse>
  );
}
