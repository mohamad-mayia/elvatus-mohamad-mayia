
import React from 'react';

import { useTranslation } from "react-i18next";
import { summaryHelper } from "../helpers/helpers"
import { Grid } from '@mui/material';
const Summary = ({ job }) => {
    const { t } = useTranslation();

    return (
        <>
            <div className="Summary">
                <Grid
                    container columnSpacing={2} rowSpacing={{ xs: 1, md: 2 }}

                >
                    <Grid container item columnSpacing={2} rowSpacing={1}
                        xs={12} sm={12} md={6} lg={6} id=" " >
                        {summaryHelper.first.map((item, index) => {
                            return <React.Fragment key={index} >
                                <Grid item xs={6} sm={6} md={6} lg={5} id=" ">
                                    <div className={"sumTitle"}>  {t(item)} </div>

                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={7} >
                                    <div className={"sumVal"}>
                                        {item === "salary" ? `${job[item].min} - ${job[item].max}` : null}
                                        {item === "industry" ? `${job[item].join(", ")}` : null}
                                        {item === "years_of_experience" ? `${job[item][0] || "N/A"} ${job[item][0] ? t("year(s) minimum") : ""}` : null}
                                    </div>
                                </Grid>

                            </React.Fragment >

                        })}


                    </Grid>
                    <Grid container item columnSpacing={2} rowSpacing={1}
                        xs={12} sm={12} md={6} lg={6} id="secondCol">

                        {summaryHelper.second.map((item, index) => {
                            return <React.Fragment key={index} >
                                <Grid item xs={6} sm={6} md={6} lg={5} id=" ">
                                    <div className={"sumTitle"}>  {t(item)} </div>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={7} >
                                    <div className={"sumVal"}>
                                        {item === "major" ? job[item].map(elem => <React.Fragment key={elem}>  {elem}<br /></React.Fragment>) : null}
                                        {item === "career_level" ? `${job[item].join(", ")}` : null}
                                        {item === "gpa" ? `${job[item][0] || "N/A"}` : null}
                                    </div>
                                </Grid>
                            </React.Fragment >

                        })}

                    </Grid>
                </Grid>

            </div >



        </>


    );
}
export default Summary;