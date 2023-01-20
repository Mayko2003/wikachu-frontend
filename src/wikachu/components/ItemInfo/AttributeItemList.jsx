import { AttributeItem } from "./"

export const AttributeItemList = ({attributes}) => {
  return (
    <ul>
      {
        attributes.map(({name})=>
          <AttributeItem key={name} name={name}/>
        )
      }
    </ul>
  )
}
