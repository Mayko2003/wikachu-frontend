import { Abilitie } from "./"

export const AbilitiesList = ({ abilities }) => {
  return (
    <div className="text-light">
      <ul>
        {
          abilities?.map(({ ability, is_hidden }) => (
            <Abilitie key={ability.name} name={ability.name} isHidden={is_hidden} />
          ))
        }
      </ul>
    </div>
  )
}
