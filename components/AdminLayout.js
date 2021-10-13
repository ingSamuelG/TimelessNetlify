import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AdminSidebar from './AdminSidebar';


const theme = createTheme({
    palette: {
        primary: {
            main: "#DF1A7C",
            light: "#ff69b4",
        },
        secondary: {
            main: "#DD4B92",
            light: "#ff69b4",
            darK: "#f2cd00",
        },
        background: {
            default: "#f4f5fd",
        },
    },
});

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <AdminSidebar />
            {children}
        </ThemeProvider>
    )
}


export default Layout
