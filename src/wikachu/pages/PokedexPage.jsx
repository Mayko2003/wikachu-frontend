import { PokemonList } from "../components/Pokemon"


export const PokedexPage = () => {
    return (
        <div className="mt-5">
            <h1 className="text-center mb-5">Find your pokemon</h1>
            <PokemonList amount={''} />
        </div>
    )
}
