
import React, { useContext } from 'react';
import { Grid, Container } from '@mui/material';
import JobCard from "./JobCard";
import CustomPagination from "./Pagination";
import { SearchContext } from "../context/searchContext";
import CircularProgress from '@mui/material/CircularProgress';
import { useTranslation } from "react-i18next";

const SearchResult = () => {
    const { loading, result, setActiveJob } = useContext(SearchContext)
    const { t } = useTranslation();

    return (
        <Container >
            <Grid container columnSpacing={1} rowSpacing={{ xs: 1, md: 2 }} >
                <Grid item xs={12}    > <h2>{t("Recent Openings")}</h2></Grid>
                {loading ?
                    <Grid item xs={12}    >  <CircularProgress size="3rem" /> </Grid> :
                    <>
                        {result === 0 ?
                            <Grid item xs={12}    ><h2>{t("No Results")}</h2>   </Grid>
                            :
                            result.map((job) => (
                                <Grid item key={job.uuid} xs={12} sm={6} md={4} lg={2}   >
                                    <JobCard item={job} setActiveJob={setActiveJob} />
                                </Grid>))
                        }
                    </>
                }


            </Grid>
            <CustomPagination />

        </Container>


    );
}
export default SearchResult;