import React from 'react';

import { useNavigate } from "react-router-dom"

const WorkJobCard = ({ item, setActiveJob, id }) => {
    const navigate = useNavigate()
    const { title, location, career_level } = item
    const handleNavigate = () => {
        setActiveJob(item)
        navigate(`/works/${item.uuid}`)
    }

    return (
        <div className={`workJobCard ${item.uuid === id ? "active" : ""}`} onClick={() => { handleNavigate() }}>
            <h3>{title} </h3>
            <label>{location?.city || "N/A"} {", "}{location?.country || "N/A"}</label>
            <label>{career_level[0] || "N/A"}</label>
        </div>
    );
}
export default WorkJobCard;