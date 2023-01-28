import { useState, useEffect } from 'react'
import { getPokemons } from '../../api/backend'

export const useGetAllPokemons = () => {


    const [list, setList] = useState(null)

    const getAllPokemons = async () => {

        const data = await getPokemons()

        setList(data)
    }


    useEffect(() => {
        getAllPokemons()
    }, [])

    return list
}
