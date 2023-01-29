import { getResults } from "../../../api/backend"
import { useState, useEffect } from 'react'

export const useGetSearchResults = (query) => {

    const [results, setResults] = useState({
        results: [],
        isLoading: true,
    })


    const getData = async () => {
        if (!query) return;
        const data = await getResults(query);
        setResults({
            results: data,
            isLoading: false,
        });
    }

    useEffect(() => {
        getData()
    }, [query])


    return {
        ...results
    }
}
