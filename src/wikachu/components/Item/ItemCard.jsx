import { Link } from "react-router-dom"
import { splitCharacter, capitalize } from "../../../helpers"
import { useLike } from '../../hooks'


export const ItemCard = ({ item }) => {

    const { onChangeLike, likeIcon } = useLike(item, 'Item')


    const handleItemClick = (e) => {
        e.target.classList.add('animate__animated', 'animate__tada')


        setTimeout(() => {
            e.target.classList.remove('animate__animated', 'animate__tada')
        }, 1000)
    }

    return (
        <div className='col-sm-6 col-lg-3 col-md-4 p-1 mx-auto mx-md-0' >
            <div className="card bg-transparent shadow h-100">

                <img src={likeIcon} alt="" className='card-icon mx-auto mt-3' onClick={onChangeLike} />

                <div className='mx-auto'>
                    <img
                        src={item.image}
                        alt={item.name}
                        className="card-img-top"
                        onClick={handleItemClick}
                        style={{ width: '5em', height: '5em' }}
                    />
                </div>
                <div className="">
                    <Link to={`/item/${item.name}`} className='nav-link link-secondary text-center'>
                        {splitCharacter(capitalize(item.name), '-')}
                    </Link>
                </div>
            </div>
        </div>
    )
}
