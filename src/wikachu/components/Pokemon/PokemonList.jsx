import { useGetPokemonsByIds } from "../../hooks"
import { PokemonCard } from "./"
import { Loading } from '../../../ui/components'


export const PokemonList = ({ list, type }) => {

    const { data, isLoading, handleLoadMore } = useGetPokemonsByIds(list, type);


    return (
        <div className="row mx-auto col-md-8 animate__animated animate__fadeIn">
            {
                !isLoading ?
                    <div className="row mx-auto">
                        {
                            data.map(pokemon => (
                                <PokemonCard key={pokemon.id} pokemon={pokemon} />
                            ))
                        }
                        <div className={`${type === 'home'? 'd-none':'d-flex'} justify-content-center mt-4`}>
                            <button className="btn btn-wk-primary text-light" onClick={handleLoadMore}>
                                Load More
                            </button>
                        </div>
                    </div> :
                    <Loading />
            }

        </div>
    )
}
