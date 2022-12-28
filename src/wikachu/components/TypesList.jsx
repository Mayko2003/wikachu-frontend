import { Type } from "./Type"

export const TypesList = ({types}) => {
  return (
    <div className="text-light">
        {
            types?.map(({type})=>(
                <Type key={type.name} name={type.name}/>
            ))
        }
    </div>
  )
}
