import React, { useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { useTranslation } from "react-i18next";
import { SearchContext } from "../context/searchContext";

export default function CustomPagination() {
    const { numberOfPages, searchParams,setSearchParams } = useContext(SearchContext)
    const { t, i18n } = useTranslation();
    const handleChange = (event, value) => {
        setSearchParams({ ...searchParams, page: value - 1, type: "page" })
    };

    const prev = () => <> {i18n.dir() === "rtl" ? <KeyboardDoubleArrowRightRoundedIcon /> : <KeyboardDoubleArrowLeftRoundedIcon />}  {t("Previus")}</>
    const next = () => <>  {t("Next")}{i18n.dir() === "rtl" ? <KeyboardDoubleArrowLeftRoundedIcon /> : <KeyboardDoubleArrowRightRoundedIcon />}  </>
    return (
        <Stack spacing={1} direction="row" justifyContent="center"
            alignItems="center" id="pagination">
            <Pagination
                count={numberOfPages}
                renderItem={(item) => (
                    <PaginationItem
                        slots={{ previous: prev, next: next }}
                        {...item}
                    />
                )}
                page={(searchParams?.page || 0) + 1}
                onChange={handleChange}
            />
        </Stack>
    );
}