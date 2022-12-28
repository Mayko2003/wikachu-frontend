import { Routes,Route } from "react-router-dom"
import {Footer, Header} from '../ui/components'
import { HomePage } from "../wikachu/pages"

export const AppRouter = () => {
    return (
        <>
            <Header/>

            <Routes>
                <Route path="/" element={<HomePage/>} />


                <Route/>

            </Routes>

            <Footer/>
        </>
    )
}
