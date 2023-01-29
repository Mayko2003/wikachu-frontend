import { useEffect, useState } from "react"
import { getItem } from "../../../api/pokemonAPI/Pokemon";


export const useGetItemsByIds = (list) => {


    const [state, setstate] = useState({
        isLoading: true,
        data: null
    })


    const asd = async (item) => {
        const data = await getItem(item.name)
        const it = {
            id: data.id,
            name: data.name,
            image: data.sprites.default,
            _id: item._id
        }
        return it
    }

    const getItems = async () => {
        if (!list) return;

        let promises = []
        for (let i = 1; i <= 12; i++) {
            promises = [...promises, asd(list[i])]

        }

        const items = await Promise.all(promises)

        return items
    }

    const handleLoadMore = async() => {
        let promises = []
        for (let i = state.data.length+1; i <= state.data.length+12; i++) {
            promises = [...promises, asd(list[i])]

        }

        const items = await Promise.all(promises)

        setstate({
            isLoading: false,
            data: [...state.data, ...items]
        })
    }


    useEffect(() => {
        getItems().then((items) => {
            setstate({
                isLoading: false,
                data: items
            })
        })
    }, [list])


    return {
        ...state,
        handleLoadMore
    }
}
