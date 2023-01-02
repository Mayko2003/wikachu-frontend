import { TypeTag } from "./TypeTag"
import { pokemonTypes } from "../data"

export const TypesList = ({types}) => {
  return (
    <div className="text-light">
        {
            types?.map(({type})=>(
                <TypeTag key={type.name} type={pokemonTypes[type.name]}/>
            ))
        }
    </div>
  )
}
