
import React, { useContext, useEffect, useState } from 'react';
import { Grid, TextField, Button, Container } from '@mui/material';
import { useTranslation } from "react-i18next";
import { SearchContext } from "../context/searchContext";
import CircularProgress from '@mui/material/CircularProgress';
const SearchForm = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState("")
    const { loading, searchParams, setSearchParams } = useContext(SearchContext)
    const search = (e) => {
        e.preventDefault()
        setSearchParams({ ...searchParams, page: 0, itemQuery: value })
    }
    useEffect(() => {
        setValue(searchParams?.itemQuery)
        // eslint-disable-next-line
    }, [])
    return (
        <Container maxWidth="lg" id="searchContainer">
            <Grid container  >
                <Grid item xs={12}>
                    <form id="searchForm" onSubmit={(e) => { search(e) }}>
                        <TextField size="small"
                            hiddenLabel
                            placeholder={t("Job Title")}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            variant="outlined"
                            sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, }}
                        />

                        <Button variant="contained" type="submit" disabled={loading}  >{loading ? <CircularProgress size="1rem" /> : t("search")}</Button>

                    </form>
                </Grid>
            </Grid>

        </Container>


    );
}
export default SearchForm;