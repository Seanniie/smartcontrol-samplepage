import { createTheme } from "@mui/material/styles";

const breakpoints = createTheme().breakpoints;
const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: ({
                root: {
                    position: 'sticky',
                    borderBottom: '1px solid lightgray',
                    boxShadow: 'none',
                },
            }),
        },
        MuiToolbar: {
            styleOverrides: ({
                root: {
                    backgroundColor: 'white',
                    minHeight: '38px',
                    [breakpoints.up('sm')]: {
                        paddingLeft: '6px',
                        paddingRight: '6px',
                        minHeight: '38px',
                    },
                },
            }),
        },
    },
});

export default theme;