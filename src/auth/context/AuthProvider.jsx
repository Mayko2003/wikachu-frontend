import { useReducer } from "react";
import { getUserLogged, loginUser } from "../../api/backend/user";
import { createUserFirebase } from "../../api/backend/user/createUserFirebase";
import { userExists } from "../../api/backend/user/userExists";
import { signInWithGoogle } from "../../firebase/providers";
import { AuthContext, authReducer } from "./";
import { types } from "../types/types";
import { getUserTokenId } from "../../firebase/getUserTokenId";
import { generatePassword, verifiyTokenExpiration } from "../helpers";


const refreshToken = async () => {
    const { idToken, expirationTime} = await getUserTokenId();
    localStorage.setItem('token', JSON.stringify({value:idToken,type:'firebase',expirationTime}));
    return {idToken,expirationTime};
}

const init = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    return {
        logged: !!token,
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = async (email = '', password = '') => {

        const action = {
            type: types.login,
            payload: true
        }

        const { token , message, type} = await loginUser(email, password);

        if(token) {
            localStorage.setItem('token', JSON.stringify({value:token,type:'default'}));
            dispatch(action);
        }

        if (message) return { type, message };
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

        const { value, expirationTime } = JSON.parse(localStorage.getItem('token'));

        if(expirationTime){
            if(verifiyTokenExpiration(expirationTime)){
                const {expirationTime,idToken} = await refreshToken();
                return await getUserLogged(idToken);
            }
        }
        return await getUserLogged(value);
    }

    const getToken = () => {
        if (!authState.logged) return undefined
        
        const { value, expirationTime } = JSON.parse(localStorage.getItem('token'));
        
        if(expirationTime){
            if(verifiyTokenExpiration(expirationTime)){
                refreshToken().then(({expirationTime,idToken})=>{
                    return idToken;
                });
            }
        }
    
        return value;
    }

    const signUpWithGoogle = async () => {
        const { ok, data, error } = await signInWithGoogle();

        const action = {
            type: types.login,
            payload: true
        }

        if (ok) {
            const {exists,type,message} = await userExists(data.accessToken);
            if(exists){    
                return {type,message}
            }
            localStorage.setItem('token', JSON.stringify({value:data.accessToken,type:'firebase',expirationTime:data.stsTokenManager.expirationTime}));
            createUserFirebase(data.accessToken,{
                displayName: data.displayName,
                password: generatePassword(),
                email: data.email,
                state: true,
            });
            dispatch(action);
        }else{
            return {type:'google',message: error};
        }

        return {};
    }

    const loginInWithGoogle = async () => {
        const { ok, data, error } = await signInWithGoogle();

        const action = {
            type: types.login,
            payload: true
        }

        if (ok) {
            const {exists,type,message} = await userExists(data.accessToken);
            if(exists){    
                localStorage.setItem('token', JSON.stringify({value:data.accessToken,type:'firebase',expirationTime:data.stsTokenManager.expirationTime}));
                dispatch(action);
            }else{
                return { type, message };
            }
        }else{
            return {type:'google',message: error};
        }

        return {};
    }

    return (
        <AuthContext.Provider value={{ ...authState, login, logout, getUser, getToken, signUpWithGoogle, loginInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )
}