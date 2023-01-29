import { useParams } from "react-router-dom";
import { capitalize } from "../../helpers/";
import { useGetPokemon } from "../hooks";
import { PokemonRoutes } from "../routes";

import { useEffect } from 'react'
import { Loading } from "../../ui/components";

export const PokemonPage = () => {

    const { id_name } = useParams();

    const { pokemon, specie, sprites, isLoading } = useGetPokemon(id_name);


    return (
        !isLoading ? <>
            <h1 className="text-light text-center my-5">{capitalize(pokemon.name)}</h1>

            <div className="row m-0">
                <div className="col-12 col-lg-4 d-flex justify-content-center animate__animated animate__fadeInLeft">
                    <img src={sprites.home.frontDefault} alt="" className="img-front-pokemon img-fluid" />
                </div>
                <div className="col-12 col-lg-8 text-light ">
                    <PokemonRoutes data={{ ...pokemon, specie: specie }} />
                </div>
            </div>
        </> :
            <Loading />
    )
}