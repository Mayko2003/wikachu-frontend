import { Route, Routes } from 'react-router-dom'
import { EvolutionInfo, MovesInfo, PokedexData, StatsInfo, NavTabs } from '../components/PokemonInfo'
export const PokemonRoutes = ({ data }) => {


    return (
        <>
            <NavTabs />
            <Routes>
                <Route path='' element={<PokedexData pokemon={data} />} />
                <Route path='stats' element={<StatsInfo stats={data.stats} />} />
                <Route path='evolutions' element={<EvolutionInfo />} />
                <Route path='moves' element={<MovesInfo moves={data.moves} />} />
            </Routes>
        </>
    )
}
