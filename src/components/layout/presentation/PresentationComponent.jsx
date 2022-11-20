import './presentationStyles.css'

export const Presentation = () => {
    return(
        <>
            <h1 className="text-center mt-5">Wikachu best wiki!!</h1>
            <h4 className=" text-center text-secondary">The site where you can found the best strategies and best pokemons for combats!</h4>
            <div className="d-flex justify-content-center align-items-center">
                <form className="d-flex col-12 col-md-8 mx-auto mt-3">
                    <input className="form-control me-2 mb-2" type="search" placeholder="Search a pokemon" aria-label="Search"/>
                </form>
            </div>
        </>
    )
}