import { useContext } from "react"
import { MoveContext } from "../../context/MoveContext"
import { MinimalistPokemonList } from "../Pokemon/MinimalistPokemonList"


export const MovePokemonsInfo = () => {

    const { move } = useContext(MoveContext)

    return (
        <div className="glass-card mx-3 mt-3 p-3">
            <h3 className="text-center">Pokemons</h3>
            <MinimalistPokemonList pokemons={move.learned_by_pokemon} />
        </div>
    )
}
