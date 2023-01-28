import { Routes, Route } from "react-router-dom"
import { AuthRoutes } from "../auth/routes"
import { SingUpPage, LoginPage } from "../auth/pages"
import { Footer, Header } from '../ui/components'
import { WikachuRoutes } from "../wikachu/routes/WikachuRoutes"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/*" element={
                    <WikachuRoutes />
                } />

                <Route path="/auth/*" element={
                    <PublicRoute restricted={true}>
                        <AuthRoutes />
                    </PublicRoute>
                } />
            </Routes>

            <Footer />
        </>
    )
}
