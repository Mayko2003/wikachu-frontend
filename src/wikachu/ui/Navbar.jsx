import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <ul className="nav nav-tabs">
            <NavLink
                        className={({isActive})=>`nav-item nav-link ${ isActive ? 'active' : ''}`} 
                        to="/"
            >
                Pokedex Data
            </NavLink>
            <NavLink
                        className={({isActive})=>`nav-item nav-link ${ isActive ? 'active' : ''}`} 
                        to="/stats"
            >
                Stats
            </NavLink>
            <NavLink
                        className={({isActive})=>`nav-item nav-link ${ isActive ? 'active' : ''}`} 
                        to="/evolutions"
            >
                Evolutions
            </NavLink>
            <NavLink
                        className={({isActive})=>`nav-item nav-link ${ isActive ? 'active' : ''}`} 
                        to="/moves"
            >
                Moves
            </NavLink>
        </ul>
    )
}
