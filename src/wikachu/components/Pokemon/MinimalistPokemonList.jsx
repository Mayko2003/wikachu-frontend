import { Loading } from "../../../ui/components"
import { useGetPokemonsByUrls } from "../../hooks"
import { MinimalistPokemonCard } from "./MinimalistPokemonCard"


export const MinimalistPokemonList = ({ pokemons }) => {

    const { data, isLoading } = useGetPokemonsByUrls(pokemons)


    return (
        !isLoading ?
            <div className="row mx-3">
                {
                    data.map(poke => (
                        <MinimalistPokemonCard key={poke.name} pokemon={poke} />
                    ))
                }
            </div> :
            <Loading />
    )
}
