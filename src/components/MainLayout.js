import React, { useEffect, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

import { SearchContext } from "../context/searchContext";

const Home = () => {
    const { result, activeJob } = useContext(SearchContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!activeJob || !result || !result.length || result.length === 0) { navigate(`/`) }
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
export default Home;