import { createTheme, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const theme = createTheme({
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
            position: 'sticky',
            borderBottom: '1px solid lightgray',
            boxShadow: 'none',
        },
      },
    },
  },
});

const MainContent = () => {

  return (
    <ThemeProvider>
      <Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainContent;


