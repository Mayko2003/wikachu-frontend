import { capitalize, splitCharacter } from "../../../helpers"

export const EVList = ({stats}) => {
    return (
        <ul className="">
            {
                stats?.map((stat) => {
                    if (stat.effort > 0) {
                        return (
                            <li key={stat.stat.name} className=''>
                                {stat.effort} {capitalize(splitCharacter(stat.stat.name, '-'))}
                            </li>
                        )
                    }
                })
            }
        </ul>
    )
}
