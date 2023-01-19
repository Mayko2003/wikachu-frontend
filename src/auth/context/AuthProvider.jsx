import { useReducer } from "react";
import { getUserLogged, loginUser } from "../../api/backend/user";
import { getCurrentUserFirebase } from "../../firebase/getCurrentUserFirebase";
import { signInWithGoogle } from "../../firebase/providers";
import { AuthContext, authReducer } from "./";
import { types } from "../types/types";

const init = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const uid = JSON.parse(localStorage.getItem('uid'));

    return {
        logged: !!token || !!uid,
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = async (username = '', password = '') => {

        const action = {
            type: types.login,
            payload: true
        }

        const { token, message, type } = await loginUser(username, password);

        if (token) {
            localStorage.setItem('token', JSON.stringify(token));
            dispatch(action);
        }

        if (message) return { type, message };
        return {};
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
        const action = {
            type: types.logout,
        };
        dispatch(action);
    }

    const getUser = async () => {
        if (!authState.logged) return undefined

        const token = JSON.parse(localStorage.getItem('token'));
        const uid = JSON.parse(localStorage.getItem('uid'));

        if (uid) {
            return await getCurrentUserFirebase();
        };

        return await getUserLogged(token);
    }

    const getToken = () => {
        if (!authState.logged) return undefined

        return JSON.parse(localStorage.getItem('token'));
    }

    const signUpWithGoogle = async () => {
        const { ok, data, error } = await signInWithGoogle();

        const action = {
            type: types.login,
            payload: true
        }

        if (ok) {
            localStorage.setItem('uid', JSON.stringify(data.uid));
            dispatch(action);
        }else{
            return {error};
        }

        return {};
    }

    return (
        <AuthContext.Provider value={{ ...authState, login, logout, getUser, getToken, signUpWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )
}
