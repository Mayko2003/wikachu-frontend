import { useContext, useEffect, useState } from "react"
import { getMovement } from '../../../api/pokemonAPI/Move'
import { MoveContext } from "../../context/MoveContext"

export const useGetMove = (id_name) => {


    const [isLoading, setIsLoading] = useState(true)

    const { changeMove, move } = useContext(MoveContext)


    const getMove = async () => {
        if (!id_name) return;

        const data = await getMovement(id_name)

        setIsLoading(false)
        changeMove(data)
    }

    useEffect(() => {
        getMove()
    }, [id_name])

    return {
        isLoading
    }
}
