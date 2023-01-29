import { Link } from "react-router-dom"
import { splitCharacter, capitalize } from "../../../helpers"
import { useLike } from '../../hooks'
import { TypeTag } from "../Pokemon"
import { pokemonTypes } from "../../data"


export const MoveCard = ({ move }) => {

    const { onChangeLike, likeIcon } = useLike(move, 'Move')

    return (
        <div className='col-sm-6 col-lg-3 col-md-4 p-1 mx-auto mx-md-0' >
            <div className="card bg-transparent shadow h-100">

                <img src={likeIcon} alt="" className='card-icon mx-auto mt-3' onClick={onChangeLike} />

                <div className='mx-auto mt-4'>
                    <TypeTag type={pokemonTypes[move.type]} />
                    <img src={`/icons/${move.damage_class}_attack_icon.jpg`} alt={move.damage_class} className="card-img-top" style={{width: '2em', height: '2em'}} />
                </div>
                <div className="text-center mt-2">
                    <i><strong>Power: </strong>{move.power}</i>
                    <br />
                    <i><strong>Accuracy: </strong>{move.accuracy}</i>
                    <br />
                    <i><strong>PP: </strong>{move.pp}</i>

                    <Link to={`/move/${move.name}`} className='nav-link link-secondary text-center'>
                        {splitCharacter(capitalize(move.name), '-')}
                    </Link>
                </div>
            </div>
        </div>
    )
}
