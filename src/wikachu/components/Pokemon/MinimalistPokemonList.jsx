import { Loading } from "../../../ui/components"
import { useGetPokemons } from "../../hooks/useGetPokemons"
import { MinimalistPokemonCard } from "./MinimalistPokemonCard"


export const MinimalistPokemonList = ({ pokemons }) => {

    const { data, isLoading } = useGetPokemons(pokemons)

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
