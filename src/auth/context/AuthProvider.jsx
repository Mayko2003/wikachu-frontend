import { useReducer } from "react";
import { getUserLogged, loginUser } from "../../api/backend/user";
import { types } from "../types/types";
import { AuthContext, authReducer } from "./";

const init = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    return {
        logged: !!token,
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = async (username = '', password = '') => {

        const action = {
            type: types.login,
            payload: true
        }

        const { token , message, type} = await loginUser(username, password);

        if(token) localStorage.setItem('token', JSON.stringify(token));

        dispatch(action);

        if(message) return { type, message};
        return {};
    }

    const logout = () => {
        localStorage.removeItem('token');
        const action = {
            type: types.logout,
        };
        dispatch(action);
    }

    const getUser = async () => {
        if (!authState.logged) return undefined

        const token = JSON.parse(localStorage.getItem('token'));

        return await getUserLogged(token);
    }

    const getToken = () =>{
        if (!authState.logged) return undefined

        return JSON.parse(localStorage.getItem('token'));
    }

    return (
        <AuthContext.Provider value={{ ...authState, login, logout, getUser, getToken }}>
            {children}
        </AuthContext.Provider>
    )
}
