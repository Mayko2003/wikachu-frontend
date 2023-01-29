import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBerryFlavor } from "../../../api/pokemonAPI/Berry/getBerryFlavor";
import { getNature } from "../../../api/pokemonAPI/Pokemon";

export const useGetNature = (id) => {
    const [nature, setNature] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const [berries, setBerries] = useState({
        berriesDisliked: [],
        berriesLiked: []
    })

    const navigate = useNavigate()

    const getData = async () => {
        const nature = await getNature(id);
        if (nature instanceof Error) navigate('/404');
        setNature(nature);
        setIsLoading(false);

        if(nature.hates_flavor==null || nature.likes_flavor ==null) return;

        const berriesDisliked = await getBerryFlavor(nature.hates_flavor.name);
        const berriesLiked =  await getBerryFlavor(nature.likes_flavor.name);
        
        setBerries({
            berriesDisliked,
            berriesLiked
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return {
        berries,
        ...nature,
        isLoading
    }
}
