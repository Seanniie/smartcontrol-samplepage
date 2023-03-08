import { AppBar, createTheme, IconButton, ThemeProvider, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import setMenuSlice from 'redux/reducers/setMenuState';


const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    position: 'sticky',
                    borderBottom: '1px solid lightgray',
                    boxShadow: 'none',
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
            root: {
                minHeight: '38px',
                backgroundColor: 'white',
                '@media (min-width:600px)': {
                paddingLeft: '6px',
                paddingRight: '6px',
                minHeight:'38px'
                },
            },
            },
        },
    },
});

const Header = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector(state=>{
        return state.MenuState.value;
    });
    const handleMenuButtonClick = () => {
        dispatch(setMenuSlice.actions.setMenuOpen(!isMenuOpen));
    }
    
    console.log(isMenuOpen)

    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
}

export default Header;

