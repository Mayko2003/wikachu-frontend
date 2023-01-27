import { capitalize, splitCharacter } from "../../../helpers"

export const AttributeItem = ({ name }) => {
    return (
        <li>
            {splitCharacter(capitalize(name), '-')}
        </li>
    )
}
