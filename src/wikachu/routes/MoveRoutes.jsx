import { Route, Routes } from "react-router-dom"
import { MoveInfo, MovePokemonsInfo, MachinesInfo, NavTabs } from "../components/MoveInfo"


export const MoveRoutes = () => {


    return (
        <>
            <NavTabs />
            <Routes>
                <Route path="/" element={<MoveInfo />} />
                <Route path='pokemons' element={<MovePokemonsInfo />} />
                <Route path='machines' element={<MachinesInfo />} />
            </Routes>
        </>
    )
}
