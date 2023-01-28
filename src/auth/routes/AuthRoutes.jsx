
import { Route, Routes } from 'react-router-dom'
import { Page404 } from '../../ui/pages/Page404'
import { LoginPage, SingUpPage } from '../pages'

export const AuthRoutes = () => {
    return (
        <Routes>

            <Route path='login' element={<LoginPage />} />

            <Route path='register' element={<SingUpPage />} />

            <Route path='/*' element={<Page404/>}/>

        </Routes>
    )
}
