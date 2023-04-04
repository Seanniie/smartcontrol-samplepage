import { Box, Grid, Stack } from "@mui/material";
import React from "react";

export default function BtnBoxContainer({children}) {
  return (
    <Box sx={{margin: '0px 15px 0px 20px'}}>
      <Grid container alignItems={'center'}>
        <Grid item xs={6}/>
        <Grid item xs={6}>
          <Stack flexDirection={'row'} justifyContent='flex-end' alignItems={'center'} p='5px 0'>
            {children}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
