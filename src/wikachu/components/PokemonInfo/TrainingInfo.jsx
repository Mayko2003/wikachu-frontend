import { capitalize, splitCharacter } from "../../../helpers"
import { EVList } from "./EVList"


export const TrainingInfo = ({ info }) => {

    return (
        <div className='animate__animated animate__fadeInUp'>
            <h2>Training</h2>
            <ul className="list-group glass-card">
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted'>Catch Rate: </strong>
                    {info.capture_rate}
                </li>
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted'>Base Friendship: </strong>
                    {info.base_happiness}
                </li>
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted'>Growth Rate: </strong>
                    {info.growth_rate && capitalize(splitCharacter(info.growth_rate?.name, '-'))}
                </li>
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted'>Base Exp.: </strong>
                    {info.base_exp}
                </li>
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted'>EV yield</strong>
                    <EVList stats={info.stats} />
                </li>

            </ul>
        </div>
    )
}
