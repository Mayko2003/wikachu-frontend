import { Route, Routes } from 'react-router-dom'
import { PokemonPage, HomePage } from '../pages'

export const WikachuRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/pokemon/:id_name/*" element={<PokemonPage />} />
        </Routes>
    )
}
