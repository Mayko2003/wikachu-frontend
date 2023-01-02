import { NavLink, useParams } from 'react-router-dom'

export const NavTabs = () => {

    const { id_name } = useParams();

    return (
        <ul className="nav nav-tabs mb-3">
            <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to={`/pokemon/${id_name}/`}
            >
                Pokedex Data
            </NavLink>
            <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to={`/pokemon/${id_name}/stats`}
            >
                Stats
            </NavLink>
            <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to={`/pokemon/${id_name}/evolutions`}
            >
                Evolutions
            </NavLink>
            <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to={`/pokemon/${id_name}/moves`}
            >
                Moves
            </NavLink>
        </ul>
    )
}
