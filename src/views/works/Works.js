
import React, { useContext, useMemo, useEffect } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { Grid, Container } from '@mui/material';
import { SearchContext } from "../../context/searchContext";
import WorkJobCard from '../../components/WorkJobCard';

const Works = () => {
    const navigate = useNavigate()
    const params = useParams();
    const { result, activeJob, setActiveJob } = useContext(SearchContext)

    const id = useMemo(() => activeJob ? activeJob.id : 0, [activeJob])
    useEffect(() => {
        if (!params.id || !result || !activeJob) {
            return navigate("/")
        }
        if (params.id !== activeJob.id) {
            const temp = result.find(item => item.uuid === params.id)
            if (temp) { setActiveJob(temp) }
            else { return navigate("/") }
        }
        // eslint-disable-next-line
    }, [params.id, result, activeJob])

    return (
        <>
            <Container maxWidth="lg" id="worksContainer">
                <Grid
                    container
                    columnSpacing={2} rowSpacing={{ xs: 1, md: 2 }}

                >
                    <Grid item xs={12} sm={12} md={3} lg={3} id="sidBar" >
                        {result.map((job) => <WorkJobCard setActiveJob={setActiveJob} key={job.uuid} item={job} id={id} />)}

                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={9} id="workContent">  <Outlet /></Grid>
                </Grid>

            </Container>


        </>


    );
}
export default Works;