import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

export const GenericTag = ({ property, incresead }) => {
  return (
    <button className='btn text-light btn-sm ms-2' style={{ background: property.color }}>
      <div className='d-flex align-items-center'>
        {
        incresead == true ?
          <span><AiOutlineArrowUp size={18}/></span>
        :
        incresead == false &&
          <span><AiOutlineArrowDown size={18}/></span>
        }
        <span className='me-1'>
          {property.icon}
        </span>
        <div className='mt-1 fw-bold'>{property.name}</div>
      </div>
    </button>
  )
}
