import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const user = result.user;
        return{
            ok: true,
            data: user
        }
    } catch (error) {
        const errorMessage = error.message;
        return{
            ok: false,
            error: errorMessage
        }
    }
}