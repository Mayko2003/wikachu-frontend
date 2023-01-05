
import { EggGroupsList } from "./EggGroupsList"


export const BreedingInfo = ({ info }) => {
    return (
        <div className='animate__animated animate__fadeInUp'>
            <h2>Breeding</h2>
            <ul className="list-group glass-card">
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted'>Egg Groups </strong>
                    <EggGroupsList groups={info.egg_groups} />
                </li>
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted'>Egg Cycles: </strong>
                    {info.hatch_counter}
                </li>
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted'>Gender Rate: </strong>
                    {
                        info.gender ? (
                            <span>
                                <i className="text-primary">{info.gender.male}% Male</i>, <i className="text-danger">{info.gender.female}% Female</i>
                            </span>
                        ) : (
                            <i className="text-muted">Genderless</i>
                        )
                    }
                </li>


            </ul>
        </div>
    )
}
