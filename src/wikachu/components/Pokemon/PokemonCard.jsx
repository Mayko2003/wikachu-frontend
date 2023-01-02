import { useLike } from '../../hooks/useLike'
import { TypeTag } from './'
import { pokemonTypes } from '../../data'


export const PokemonCard = ({ pokemon }) => {

    const { onChangeLike, likeIcon } = useLike(pokemon)


    const handlePokemonClick = (e) => {
        e.target.classList.add('animate__animated', 'animate__tada')


        setTimeout(() => {
            e.target.classList.remove('animate__animated', 'animate__tada')
        }, 1000)
    }



    return (
        <div className='col-lg-3 col-md-4 p-1' >
            <div className="card bg-transparent shadow h-100">

                <img src={likeIcon} alt="" className='card-icon mx-auto mt-3' onClick={onChangeLike} />

                <div className='mx-auto'>
                    <img
                        src={pokemon.image}
                        alt={pokemon.name}
                        className="card-img-top"
                        onClick={handlePokemonClick}
                    />
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className='text-muted text-center'>#{pokemon.id}</h5>

                    <a href="" className='nav-link link-secondary fs-2 p-0'>
                        {pokemon.name}
                    </a>

                    <div className='d-flex mt-auto'>
                        {
                            pokemon.types.map(({ type }) => (
                                <TypeTag key={type.name} type={pokemonTypes[type.name]} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
