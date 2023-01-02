import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { Footer, Header } from '../ui/components'
import { WikachuRoutes } from "../wikachu/routes/WikachuRoutes"

export const AppRouter = () => {



    return (
        <>
            <Header />
            
            <Routes>
                {/* TODO: add login and register routes */}
                <Route path="login" element={<LoginPage />}/>

                <Route path="/*" element={<WikachuRoutes />} />


            </Routes>

            <Footer />
        </>
    )
}
