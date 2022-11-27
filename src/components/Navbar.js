import React, { useContext, useCallback, useRef, useMemo } from 'react';
import logo from "../assets/images/logo.svg";
import { Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';

import LangButton from './LangButton';
import { LangContext } from "../context/languageContext";
const Navbar = () => {
    const { changLanguage, langAndDir } = useContext(LangContext)
    const changeLanguageRef = useRef(changLanguage)
    const changLanguageFuction = useCallback((lang) => { changeLanguageRef.current(lang) }, [])
    const lang = useMemo(() => langAndDir.lang, [langAndDir.lang])
    return (
        <div id="navbar">
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Link to="/">
                        <img alt="ELEVATUS" src={logo} />
                    </Link>
                    <LangButton lang={lang} changFunc={changLanguageFuction} />
                </Grid>

            </Container>

        </div>
    );
}
export default Navbar;