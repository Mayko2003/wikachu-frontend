
import { Route, Routes } from 'react-router-dom'
import { LoginPage, SingUpPage } from '../pages'

export const AuthRoutes = () => {
    return (
        <>

            <Routes>

                <Route path='login' element={<LoginPage />} />

                <Route path='register' element={<SingUpPage />} />

            </Routes>


        </>
    )
}
