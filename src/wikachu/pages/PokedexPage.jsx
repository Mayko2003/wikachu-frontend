import { PokemonList } from "../components/Pokemon"
import { useGetAllPokemons } from "../hooks"


export const PokedexPage = () => {

    const allList = useGetAllPokemons()

    return (
        <div className="mt-5">
            <h1 className="text-center mb-5">Find your pokemon</h1>
            {
                allList && <PokemonList list={allList} />
            }
        </div>
    )
}
