import { usePokemon } from "../../hooks"
import { PokemonCard } from "./"
import { Loading } from '../../../ui/components'


export const PokemonList = ({ amount }) => {

    const { data, isLoading } = usePokemon(amount);


    return (
        <div className="row mx-auto col-md-8 animate__animated animate__fadeIn">
            {
                !isLoading ?
                    data.map(pokemon => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    )) :
                    <Loading />
            }
        </div>
    )
}
