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

    return (
        <AuthContext.Provider value={{ ...authState, login: login, logout: logout}}>
            {children}
        </AuthContext.Provider>
    )
}
