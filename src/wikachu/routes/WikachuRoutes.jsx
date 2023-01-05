import { Route, Routes } from 'react-router-dom'
import { PokemonPage, HomePage } from '../pages'
import { PokedexPage } from '../pages/PokedexPage'

export const WikachuRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/pokemon/:id_name/*" element={<PokemonPage />} />

            <Route path='/pokedex' element={<PokedexPage />} />
            
        </Routes>
    )
}
