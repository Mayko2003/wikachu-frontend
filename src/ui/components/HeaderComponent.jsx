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
                                    to="/move"
                                >
                                    Moves
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to="/item"
                                >
                                    Items
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to="/nature"
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
                            <li className="nav-item ms-lg-auto">
                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to="/login"
                                >
                                    Log in
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to="/register"
                                >
                                    Sign up
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                {
                                    logged &&
                                    <span className="nav-item nav-link">
                                        {user?.username}
                                    </span>
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    logged &&
                                    <button
                                        className='nav-item nav-link btn'
                                        onClick={onLogout}
                                    >
                                        <BiExit color="red"/>
                                    </button>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}