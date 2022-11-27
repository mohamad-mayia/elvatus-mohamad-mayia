
import React, { useContext } from 'react';
import { SearchContext } from "../context/searchContext";
import Tag from "./Tag"
import Summary from "./Summary"
import { useTranslation } from "react-i18next";
import { monthNames, analyser } from "../helpers/helpers";
import {
    FacebookShareButton, LinkedinShareButton, TwitterShareButton, FacebookIcon, LinkedinIcon,
    TwitterIcon,
} from "react-share";
import { Button } from '@mui/material';
const WorkDetails = () => {
    const { t } = useTranslation();
    const { activeJob } = useContext(SearchContext)
    const dateString = (date) => {
        const temp = new Date(date)
        return `${temp.toLocaleString('en-us', { weekday: 'long' })}, ${monthNames[temp.getMonth()]} ${temp.getDate()}, ${temp.getFullYear()} `
    }

    return (
        <>
            {activeJob ? <div id="workDetails">
                <div className='workTitle'>{activeJob.title}{"  "}{activeJob?.job_type[0] ? <Tag val={activeJob?.job_type[0]} /> : ""}</div>
                <div className="time">{t("postedAt")}{": "}{dateString(activeJob.posted_at)}</div>
                <div className="sectionTitle">{t("Description")}</div>
                <div className=" " dangerouslySetInnerHTML={{ __html: activeJob?.description?.toString() }}></div>
                <div className="sectionTitle">{t("Requirments")}</div>
                <div className=" " dangerouslySetInnerHTML={{ __html: activeJob?.requirements?.toString() }}></div>
                <div className="sectionTitle">{t("Summary")}</div>
                <Summary job={activeJob} />

                <div className="sectionTitle">{t("Required Skills")}</div>
                <div className='workTitle'>
                    {activeJob.skills ? activeJob.skills.map((skill, index) => <Tag val={skill} key={index} />) : ""}
                </div>
                <div className='divider'></div>
                <div className="sectionTitle">{t("Languages")}</div>
                <div className='workTitle'>
                    {activeJob.languages ? activeJob.languages.map((lang, index) => {
                        return <Tag val={`${analyser(lang)}`} key={index} />
                    }) : ""}
                </div>
                <div className='divider'></div>

                <div className="social">
                    <div className='share'> <span>{t("Share")}</span>
                        <FacebookShareButton url={activeJob?.url}><FacebookIcon size={32} round={true} /></FacebookShareButton>
                        <TwitterShareButton url={activeJob?.url}><TwitterIcon size={32} round={true} /></  TwitterShareButton>
                        <LinkedinShareButton url={activeJob?.url}><LinkedinIcon size={32} round={true} /></LinkedinShareButton>
                    </div>

                    <div id="apply"><Button variant="contained">{t("Apply")}</Button></div>
                </div>

            </div> : null
            }


        </>


    );
}
export default WorkDetails;