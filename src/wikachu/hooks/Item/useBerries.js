import { useEffect, useState } from "react"
import { getItem } from "../../../api/pokemonAPI/Pokemon";

export const useBerries = (berries) => {

    const [berriesInfo, setBerriesInfo] = useState({
        isLoading: true,
        data: []
    });

    const getBerries = () => {
        if(!berries) return
        Promise.all(berries.map(async({berry})=>{
            const res = await getItem(`${berry.name}-berry`);
            const newBerry = {
                name: berry.name,
                image: res.sprites.default,
            }
            return newBerry
        })).then(berries=>{
            setBerriesInfo({
                isLoading: false,
                data: berries
            })
        })
    }

    useEffect(() => {
      getBerries();
    }, [berries])
    
    return {
        ...berriesInfo
    }
}
