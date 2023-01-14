import { NavLink, useParams } from "react-router-dom";


export const NavTabs = () => {

    const { id_name } = useParams();
    return (
        <ul className="nav nav-tabs mb-3 mx-3">
            <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to={`/move/${id_name}/`}
            >
                Move Info
            </NavLink>
            <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to={`/move/${id_name}/pokemons`}
            >
                Learned by
            </NavLink>
            <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to={`/move/${id_name}/machines`}
            >
                Machines
            </NavLink>
        </ul>
    )
}
