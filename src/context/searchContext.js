import React, { createContext, useState, useMemo, useEffect, useCallback } from 'react';
import { searchEndPoent } from "./endPoints";
import { calculateNumberPages } from "../helpers/helpers"
const SearchContext = createContext()

function DataProvider({ children }) {

    const [data, setData] = useState([])
    const [activeJob, setActiveJob] = useState(null)
    const [loading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useState({ page: 0, itemQuery: "", type: "text" })
    const [numberOfPages, setNumberOfPages] = useState(0)

    const { page, itemQuery, type } = searchParams

    const fetchData = useCallback(async () => {
        setLoading(true)
        const url = `${searchEndPoent}&page=${page}&itemQuery=${itemQuery}`
        try {
            const responsee = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'accept-account': '961c06eb-7e25-406c-87d5-d0742e09d96c',
                    'accept-company': '900a776e-a060-422e-a5e3-979ef669f16b'
                },
            })
            setLoading(false)
            const response = await responsee.json();
            if (response.results.total === 0) {
                setData(0)
                setNumberOfPages(0)
            }
            else {
                setData(response.results.jobs);
                type === "text" && setNumberOfPages(calculateNumberPages(response.results.total, 18))
            }

        }
        catch (err) {
            console.log(err)
        }
    }, [page, itemQuery, type])

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [page, itemQuery, type])

    const result = useMemo(() => data, [data])

    const values = useMemo(() => {
        return {
            result,
            setActiveJob,
            activeJob,
            numberOfPages,
            loading,
            searchParams,
            setSearchParams
        }

    }, [result,
        setActiveJob,
        activeJob,
        numberOfPages,
        loading,
        searchParams,
        setSearchParams])
    return (
        <SearchContext.Provider value={values}>
            {children}
        </SearchContext.Provider>
    )
}

export { SearchContext, DataProvider }