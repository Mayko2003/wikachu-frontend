import { useState, useEffect } from 'react'
import { getPopular } from '../../api/backend/pokemon'

export const useGetPopularPokemons = () => {
    const [list, setList] = useState(null)

    const getPopularPokemons = async () => {

        const data = await getPopular()
        setList(data)
    }


    useEffect(() => {
        getPopularPokemons()
    }, [])

    return list
}
