import { BerryItem } from "./BerryItem"

export const BerryList = ({berries}) => {
  return (
    <div className="berries row">
        {
            berries.map(({name,image})=>
                <BerryItem key={name} name={name} image={image}/>
            )
        }
    </div>
  )
}
