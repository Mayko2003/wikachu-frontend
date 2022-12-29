import { getColorType } from "../helpers/getColorType"

export const Type = ({name}) => {
  
  const color = getColorType(name);
  
  return (
    <div className="btn text-light me-1" style={color}>
        {name}
    </div>
  )
}
