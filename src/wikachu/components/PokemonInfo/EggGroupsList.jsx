import { capitalize, splitCharacter } from "../../../helpers"

export const EggGroupsList = ({ groups }) => {
    return (
        <ul className="">
            {
                groups?.map((group) => (
                    <li key={group.name} className=''>
                        {capitalize(splitCharacter(group.name, '-'))}
                    </li>
                ))
            }
        </ul>
    )
}
