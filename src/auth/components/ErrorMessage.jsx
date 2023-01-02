
export const ErrorMessage = ({errors,name}) => {

  return (
    <>
        <p className='text-danger'>{errors[name]?.message}</p>
    </>
  )
}
