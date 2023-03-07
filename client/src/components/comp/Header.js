import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function Header() {
    
    return (
        <Box>
            <AppBar sx={{backgroundColor:"white"}}>
                <Toolbar variant="string">
                    <IconButton edge="end">
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
