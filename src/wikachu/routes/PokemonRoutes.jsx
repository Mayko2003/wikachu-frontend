import { Route, Routes } from 'react-router-dom'
import { EvolutionInfo, MovesInfo, PokedexData, StatsInfo } from '../components'
import { Navbar } from '../ui/Navbar'
export const PokemonRoutes = ({ data }) => {


    return (
        <>
            <Navbar />
            <Routes>
                <Route path='' element={<PokedexData pokemon={data} />} />
                <Route path='stats' element={<StatsInfo stats={data.stats} />} />
                <Route path='evolutions' element={<EvolutionInfo />} />
                <Route path='moves' element={<MovesInfo moves={data.moves} />} />
            </Routes>
        </>
    )
}
