import { useEffect, useState } from "react"
import { getMovement } from "../../api/pokemonAPI/Move"


export const useMovesPokemon = (moves) => {

    const [movesInfo, setMovesInfo] = useState({
        isLoading: true,
        data: [],
    })

    const getMoves = () => {
        if (!moves) return
        Promise.all(moves.map(async (move) => {
            const res = await getMovement(move.move.name)
            const newMove = {
                name: move.move.name,
                type: res.type.name,
                power: res.power,
                accuracy: res.accuracy,
                pp: res.pp,
                level: move.version_group_details[0].level_learned_at,
                method: move.version_group_details[0].move_learn_method.name,
                category: res.damage_class.name,
            }
            return newMove
        })).then((moves) => {
            setMovesInfo({
                isLoading: false,
                data: moves.sort((a, b) => a.level - b.level),
            })
        })
    }


    useEffect(() => {

        getMoves()

    }, [moves])



    return {
        ...movesInfo
    }
}
