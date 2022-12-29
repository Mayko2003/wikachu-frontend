import './App.css'
import { AuthProvider } from './auth/context'
import { AppRouter } from './router/'


export const App = () => {
    return (
        <>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </>
    )
}

