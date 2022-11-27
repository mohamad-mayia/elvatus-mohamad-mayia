import React from 'react';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from "react-i18next";

const buttonTheme = createTheme({
    palette: {
        primary: {
            main: "#fff",
        },
        secondary: {
            main: '#11cb5f',
        },
    },
});
const LangButton = ({ lang, changFunc }) => {
    const { t } = useTranslation();
    const langhandler = () => { changFunc(lang === "ar" ? "en" : "ar") }
    return (
        <ThemeProvider theme={buttonTheme}>
            <Button variant="text" color="primary" onClick={() => { langhandler() }}>{t(lang)} </Button>
        </ThemeProvider>
    );
}
export default LangButton;