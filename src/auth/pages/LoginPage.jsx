import { useContext, useEffect } from 'react'
import { AuthContext } from '../context'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

    const { login } = useContext(AuthContext)
    const navigate = useNavigate()


    const onLogin = () => {
        login('test', 'test').then(() => {
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <>
            <div className='text-light'>
                <h1>TEST LOGIN</h1>
            </div>
            <button className='btn btn-primary' onClick={onLogin}>
                Login
            </button>
        </>
    )
}
