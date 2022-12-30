import { useReducer } from "react";
import { loginUser } from "../../api/backend/user";
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

        const { token } = await loginUser(username, password);

        localStorage.setItem('token', JSON.stringify(token));

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('token');
        const action = {
            type: types.logout,
        };
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{ ...authState, login: login, logout: logout}}>
            {children}
        </AuthContext.Provider>
    )
}
