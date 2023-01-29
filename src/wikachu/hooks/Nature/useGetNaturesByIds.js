import { useEffect, useState } from "react"
import { getNature } from "../../../api/pokemonAPI/Pokemon";


export const useGetNaturesByIds = (list) => {


    const [state, setstate] = useState({
        isLoading: true,
        data: null
    })


    const fetchNature = async (nature) => {
        const data = await getNature(nature.name)
        const nat = {
            id: data.id,
            name: data.name,
            decrease: data.decreased_stat?.name,
            increase: data.increased_stat?.name,
            likes: nature.likes,
            _id: nature._id
        }
        return nat
    }

    const getNatures = async () => {
        if (!list) return;
        let promises = []
        for (let i = 0; i < 12 && i < list.length; i++) {
            promises = [...promises, fetchNature(list[i])]
        }

        const natures = await Promise.all(promises)

        return natures
    }

    const handleLoadMore = async() => {

        if(state.data.length >= list.length) return;

        let promises = []
        for (let i = state.data.length; i < state.data.length+12 && i < list.length ; i++) {
            promises = [...promises, fetchNature(list[i])]

        }

        const natures = await Promise.all(promises)

        setstate({
            isLoading: false,
            data: [...state.data, ...natures]
        })
    }


    useEffect(() => {
        getNatures().then((natures) => {
            setstate({
                isLoading: false,
                data: natures
            })
        })
    }, [list])


    return {
        ...state,
        handleLoadMore
    }
}
