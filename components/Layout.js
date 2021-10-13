import React from 'react'
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import Navbar from './Appbar';
import Footer from './Footer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fab from '@mui/material/Fab';



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
            <Navbar />
            {children}
            <div className="WA-button">
                <Fab color="secondary" aria-label="edit">
                    <WhatsAppIcon />
                </Fab>
            </div>

            <Footer />
        </ThemeProvider>
    )
}


export default Layout
