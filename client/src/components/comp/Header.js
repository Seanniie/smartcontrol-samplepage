import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import setMenuSlice from 'redux/reducers/setMenuState';

const useStyles = makeStyles((theme) => ({
    
}));

export default function Header () {

    const classes = useStyles();
    const dispatch = useDispatch();
    const isMenuOpen = useSelector(state=>{
        return state.MenuState.value;
    });

    const handleMenuButtonClick = () => {
        dispatch(setMenuSlice.actions.setMenuOpen(!isMenuOpen));
    }
    
    return (

        <>
            <AppBar>
                <Toolbar>
                    <Box flexGrow={1}>
                        <Box padding={0.5}>
                            <IconButton edge="end" onClick={handleMenuButtonClick}>
                                <MenuIcon/>
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}
