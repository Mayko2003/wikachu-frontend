import { Navigate, Route, Routes } from 'react-router-dom'
import { EvolutionInfo, MovesInfo, PokedexData, StatsInfo, NavTabs } from '../components/PokemonInfo'
import { TrainingInfo } from '../components/PokemonInfo/TrainingInfo'
import { BreedingInfo } from '../components/PokemonInfo/BreedingInfo'
import { getGender } from '../helpers'
import { TypesDefensesInfo } from '../components/PokemonInfo/TypesDefensesInfo'
export const PokemonRoutes = ({ data }) => {


    return (
        <>
            <NavTabs />
            <Routes>
                <Route path='' element={<PokedexData pokemon={data} />} />
                <Route path='stats' element={<StatsInfo stats={data.stats} />} />
                <Route path='evolutions' element={<EvolutionInfo />} />
                <Route path='moves' element={<MovesInfo moves={data.moves} />} />
                <Route path='training' element={<TrainingInfo info={{ ...data.specie, base_exp: data.base_experience, stats: data.stats }} />} />
                <Route path='breeding' element={<BreedingInfo info={{ ...data.specie, gender: getGender(data.specie.gender_rate) }} />} />
                <Route path='defenses' element={<TypesDefensesInfo types={data.types} />} />

                <Route path='*' element={<Navigate to={'/404'} />} />
            </Routes>
        </>
    )
}
