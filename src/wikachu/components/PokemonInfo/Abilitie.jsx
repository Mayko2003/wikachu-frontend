import { capitalize } from "../../helpers"

export const Abilitie = ({name, isHidden}) => {
  return (
    <li className="">
        {capitalize(name)}
        {
          isHidden && <strong className=""> (hidden ability) </strong> 
        }
    </li>
  )
}
