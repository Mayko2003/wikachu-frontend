import { PokemonList } from '../components/Pokemon'
import runningPikachu from '/assets/running-pikachu.gif'

export const HomePage = () => {
    return (
        <>
            <div id='main' className='mt-5'>
                <img src={runningPikachu} className="d-flex mt-4 mx-auto img-fluid" style={{ height: '10em', width: '10em' }} />
                <h1 className="text-center mt-5">Wikachu best wiki!!</h1>
                <h4 className=" text-center text-secondary">The site where you can found the best strategies and best pokemons for combats!</h4>
                {/* TODO: translate searchbar to a component */}
                <div className='col-6 mx-auto mt-3'>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>

            <div className='mt-5'>
                <h1 className='ms-lg-5 text-center text-lg-start mb-5'>Popular Pokemons</h1>
                <PokemonList amount={'Popular'} />
            </div>

        </>
    )
}
