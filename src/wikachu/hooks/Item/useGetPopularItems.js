import { useState, useEffect } from 'react'
import { getPopularItems } from '../../../api/backend/'

export const useGetPopularItems = () => {
    const [list, setList] = useState(null)

    const getPopular = async () => {

        const data = await getPopularItems()
        setList(data)
    }


    useEffect(() => {
        getPopular()
    }, [])

    return list
}
