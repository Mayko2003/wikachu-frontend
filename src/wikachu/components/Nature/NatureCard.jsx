import { Link } from "react-router-dom"
import { splitCharacter, capitalize } from "../../../helpers"
import { useLike } from '../../hooks'


export const NatureCard = ({ nature }) => {

    const { onChangeLike, likeIcon } = useLike(nature, 'Nature')

    return (
        <div className='col-sm-6 col-lg-3 col-md-4 p-1 mx-auto mx-md-0' >
            <div className="card bg-transparent shadow h-100">

                <img src={likeIcon} alt="" className='card-icon mx-auto mt-3' onClick={onChangeLike} />

                <div className='mx-auto mt-4 text-center'>
                    <i>
                        <strong className={`${nature.decrease? 'text-danger':'text-muted'}`}>Decrease: </strong>
                        {nature.decrease ? splitCharacter(capitalize(nature.decrease), '-') : 'None'}
                    </i>
                    <br />
                    <i>
                        <strong className={`${nature.decrease? 'text-primary':'text-muted'}`}>Increase: </strong>
                        {nature.increase ? splitCharacter(capitalize(nature.decrease), '-') : 'None'}
                    </i>
                </div>
                <div className="text-center mt-2">

                    <Link to={`/nature/${nature.name}`} className='nav-link link-secondary text-center'>
                        {splitCharacter(capitalize(nature.name), '-')}
                    </Link>
                </div>
            </div>
        </div>
    )
}
