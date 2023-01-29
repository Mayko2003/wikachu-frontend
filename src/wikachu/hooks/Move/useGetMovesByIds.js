import { useEffect, useState } from "react"
import { getMovement } from "../../../api/pokemonAPI/Move";

export const useGetMovesByIds = (list) => {
    const [state, setstate] = useState({
        isLoading: true,
        data: null
    })


    const fetchMove = async (move) => {
        const data = await getMovement(move.name)
        const mov = {
            id: data.id,
            name: data.name,
            accuracy: data.accuracy,
            power: data.power,
            type: data.type.name,
            pp: data.pp,
            damage_class: data.damage_class.name,
            likes: move.likes,
            _id: move._id
        }
        return mov
    }

    const getItems = async () => {
        if (!list) return;

        let promises = []
        for (let i = 0; i < 12 && i < list.length; i++) {
            promises = [...promises, fetchMove(list[i])]

        }

        const moves = await Promise.all(promises)

        return moves
    }

    const handleLoadMore = async () => {
        let promises = []
        for (let i = state.data.length; i < state.data.length + 12 && i < list.length; i++) {
            promises = [...promises, fetchMove(list[i])]

        }

        const moves = await Promise.all(promises)

        setstate({
            isLoading: false,
            data: [...state.data, ...moves]
        })
    }


    useEffect(() => {
        getItems().then((moves) => {
            setstate({
                isLoading: false,
                data: moves
            })
        })
    }, [list])


    return {
        ...state,
        handleLoadMore
    }
}
