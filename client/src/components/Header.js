import * as React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import setSideBarSlice from 'redux/reducers/setSideBarState';
import { useEffect } from 'react';
import { useCallback } from 'react';

export default function Header () {
    
    const dispatch = useDispatch();
    const isSideBarOpen = useSelector(state=>{
        return state.SibeBarState.value;
    });
    useEffect(() => {
        dispatch(setSideBarSlice.actions.setSideBarOpen(true));
    }, [dispatch]);

    const handleMenuButtonClick = useCallback(() => {
        dispatch(setSideBarSlice.actions.setSideBarOpen(!isSideBarOpen));
    }, [dispatch, isSideBarOpen]);

    return (
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
    );
}
