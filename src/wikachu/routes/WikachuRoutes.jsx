import { Navigate, Route, Routes } from 'react-router-dom'
import { PokemonPage, HomePage, ItemPage, NaturePage } from '../pages'
import { PokedexPage } from '../pages/PokedexPage'
import { Page404 } from '../../ui/pages/Page404'

export const WikachuRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/pokemon/:id_name/*" element={<PokemonPage />} />

            <Route path='/item/:id_name/*' element={<ItemPage />}/>
            
            <Route path='/nature/:id_name/*' element={<NaturePage />}/>

            <Route path='/pokedex' element={<PokedexPage />} />

            <Route path='/*' element={<Page404 />} />
        </Routes>
    )
}
