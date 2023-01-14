import { Link } from "react-router-dom"
import { capitalize } from "../../../helpers"
import { pokemonTypes } from "../../data"


export const MinimalistPokemonCard = ({ pokemon }) => {
    return (
        <div className="d-flex bg-transparent col-xxl-2 col-xl-3 col-lg-4 col-md-5 col-sm-6 me-auto me-md-0">
            <div>
                <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            </div>
            <div className="text-secondary">
                <h3 className="nav-item"><Link className="nav-link link-secondary" to={`/pokemon/${pokemon.name}/`}>{capitalize(pokemon.name)}</Link></h3>
                <div className="d-flex ms-3">
                    <h5 className="text-end">#{pokemon.id}</h5>
                    {
                        pokemon.types.map(type => (
                            <h5
                                key={type.type.name}
                                className="text-end mx-1"
                                style={{color: pokemonTypes[type.type.name].color}}
                            >
                                {capitalize(type.type.name)}
                            </h5>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
