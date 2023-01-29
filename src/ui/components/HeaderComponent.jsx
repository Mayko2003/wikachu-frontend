import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";
import { BiExit } from 'react-icons/bi'
import './headerStyles.css'

export const Header = () => {
    const { logout, logged, getUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [user, setUser] = useState({});

    useEffect(() => {  
        async function getUserLogged() {
            let response = await getUser();
            setUser(response);
        }
        getUserLogged();   
    }, [logged])
    

    const onLogout = () => {
        logout();
        navigate('/', {
            replace: true
        })
        // refresh page
        window.location.reload();
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent shadow-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>WIKACHU</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav w-100">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to="/pokedex"
                                >
                                    Pokedex
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to="/moves"
                                >
                                    Moves
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to="/items"
                                >
                                    Items
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to="/natures"
                                >
                                    Natures
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to="/strategy"
                                >
                                    Strategies
                                </NavLink>
                            </li>  
                            {
                                !logged && 
                                <>
                                    <li className="nav-item ms-lg-auto">
                                        <NavLink
                                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                            to="/auth/login"
                                        >
                                        Log in
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                            to="/auth/register"
                                        >
                                        Sign up
                                        </NavLink>
                                    </li>
                                </>
                            }
                            {
                                logged &&
                                <>
                                    <li className="nav-item ms-lg-auto">
                                        <span className="nav-item nav-link">
                                            {user?.displayName}
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className='nav-item nav-link btn'
                                            onClick={onLogout}
                                        >
                                            <BiExit color="yellow" size={'1.5em'} />
                                        </button>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}