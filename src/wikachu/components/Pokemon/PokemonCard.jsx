import { Link } from 'react-router-dom'
import { capitalize } from '../../../helpers'
import { useLike } from '../../hooks'
import { TypesList } from './TypesList'


export const PokemonCard = ({ pokemon }) => {

    const { onChangeLike, likeIcon } = useLike(pokemon)


    const handlePokemonClick = (e) => {
        if(e.target.disabled) return
        e.target.classList.add('animate__animated', 'animate__tada')
        //disable element
        e.target.disabled = true

        setTimeout(() => {
            e.target.classList.remove('animate__animated', 'animate__tada')
            //enable element
            e.target.disabled = false
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

                    <Link to={`/pokemon/${pokemon.name}`} className='nav-link link-secondary fs-2 p-0'>
                        {capitalize(pokemon.name)}
                    </Link>

                    <div className='mt-auto'>
                        <TypesList types={pokemon.types} />
                    </div>
                </div>
            </div>
        </div>
    )
}
