

export const TypeTag = ({ type }) => {
    return (
        <button className='btn text-light me-1 mt-1 btn-sm' style={{ backgroundColor: type.color, width: '6em' }}>
            {type.name}
        </button>
    )
}
