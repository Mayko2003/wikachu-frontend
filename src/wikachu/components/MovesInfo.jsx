
export const MovesInfo = ({moves}) => {
  return (
    <>
      <h2>Moves</h2>
      <ul>
        {
          moves?.map(({move})=>(
            <li key={move.name}>{move.name}</li>
          ))
        }
      </ul>
    </>
  )
}
