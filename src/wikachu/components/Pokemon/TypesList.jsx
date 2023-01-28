import { TypeTag } from "./"
import { pokemonTypes } from "../../data"

export const TypesList = ({types}) => {
  return (
    <div className="text-light d-flex">
        {
            types?.map(({type})=>(
                <TypeTag key={type.name} type={pokemonTypes[type.name]}/>
            ))
        }
    </div>
  )
}
