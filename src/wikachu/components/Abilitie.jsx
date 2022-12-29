
export const Abilitie = ({name, isHidden}) => {
  return (
    <li className="text-dark">
        {name}
        {
          isHidden && <strong className="text-dark"> (hidden ability) </strong> 
        }
    </li>
  )
}
