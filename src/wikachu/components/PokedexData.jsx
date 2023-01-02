import { AbilitiesList, TypesList } from './';
import './styles.css'

export const PokedexData = ({ pokemon }) => {

    const { id, height, weight, abilities, types } = pokemon;

    return (
        <div className='animate__animated animate__fadeInUp'>
            <h2>Pokedex Data</h2>
            <ul className="list-group glass-card">
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted'>National N°: </strong>
                    {id}
                </li>
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted'>Weight: </strong>
                    {weight / 10} kg
                </li>
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted'>Height: </strong>
                    {height / 10} m
                </li>
                <li className="list-group-item bg-transparent text-white">
                    <h4 className='text-muted'>Abilities</h4>
                    <AbilitiesList abilities={abilities} />
                </li>
                <li className="list-group-item bg-transparent text-white">
                    <h4 className='text-muted mb-3'>Types</h4>
                    <TypesList types={types} />
                </li>
            </ul>
        </div>
    )
}
