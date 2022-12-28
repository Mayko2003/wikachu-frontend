import { useReducer } from "react";
import { loginUser } from "../../api/backend/user";
import { types } from "../types/types";
import { AuthContext, authReducer } from "./";

const init = () => {
    const user = JSON.parse(localStorage.getItem('token'));

    return {
        logged: !!user,
        user
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = async (username = '', password = '') => {

        const user = { username, password };

        const action = {
            type: types.login,
            payload: user
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
