import React from 'react'
import { AbilitiesList } from './AbilitiesList';
import { ListTypes } from './ListTypes';

export const PokedexData = ({pokemon}) => {

    const {id, height, weight, abilities, types} = pokemon;

    return (
        <>
            <h2>Pokedex Data</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <strong>Id: </strong>  
                    {id}
                </li>
                <li className="list-group-item">
                    <strong>Weight: </strong> 
                    { weight/10 } kg
                </li>
                <li className="list-group-item">
                    <strong>Height: </strong>
                    {height/10 } m
                </li>
                <li className="list-group-item">
                    <h4>Abilities</h4>
                    <AbilitiesList abilities={abilities}/>
                </li>
                <li className="list-group-item">
                    <h4>Types</h4>
                    <ListTypes types={types}/>
                </li>
            </ul>
        </>
    )
}
