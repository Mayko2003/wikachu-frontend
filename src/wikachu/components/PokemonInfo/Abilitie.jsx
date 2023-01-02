import { splitCharacter } from "../../../helpers"
import { capitalize } from "/src/helpers"

export const Abilitie = ({ name, isHidden }) => {
    return (
        <li className="">
            {capitalize(splitCharacter(name, '-'))}
            {
                isHidden && <strong className=""> (hidden ability) </strong>
            }
        </li>
    )
}
