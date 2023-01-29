import { Route, Routes } from 'react-router-dom'
import { PokemonPage, HomePage, ItemPage, NaturePage, SearchPage, ItemsPage, MovesPage } from '../pages'
import { PokedexPage } from '../pages/PokedexPage'
import { Page404 } from '../../ui/pages/Page404'
import { MovePage } from '../pages/MovePage'
import { MoveProvider } from '../context/MoveProvider'

export const WikachuRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/pokemon/:id_name/*" element={<PokemonPage />} />

            <Route path='/item/:id_name/*' element={<ItemPage />} />

            <Route path='/nature/:id_name/*' element={<NaturePage />} />

            <Route path='/pokedex' element={<PokedexPage />} />

            <Route path='items' element={<ItemsPage />} />

            <Route path='/moves' element={<MovesPage />} />

            <Route path='/move/:id_name/*' element={
                <MoveProvider>
                    <MovePage />
                </MoveProvider>
            } />

            <Route path='/search' element={<SearchPage />} />

            <Route path='/*' element={<Page404 />} />
        </Routes>
    )
}
