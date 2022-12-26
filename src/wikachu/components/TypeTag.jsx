

export const TypeTag = ({ type }) => {
    return (
        <button className='btn text-light me-1 btn-sm' style={{ backgroundColor: type.color, opacity: 0.7 }}>
            {type.name}
        </button>
    )
}
