import React from 'react';
import { Button } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"

const JobCard = ({ item, setActiveJob }) => {
    const navigate = useNavigate()
    const { t } = useTranslation();
    const { title, location, is_top, career_level, skills } = item
    const handleNavigate = () => {
        setActiveJob(item)
        navigate(`/works/${item.uuid}`)
    }
    return (
        <div className='jobCard'>
            <h3>{title}{is_top && <StarRoundedIcon sx={{ color: "#e7d730" }} />}</h3>
            <label>{location?.city || "N/A"}</label>
            <label>{career_level[0] || "N/A"}</label>
            <label>{skills[0] ? skills.join(",") : "N/A"}</label>
            <Button variant="outlined" onClick={() => { handleNavigate() }} >    {t("View")} </Button>


        </div>
    );
}
export default JobCard;