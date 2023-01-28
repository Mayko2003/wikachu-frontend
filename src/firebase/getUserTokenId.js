import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "./config";

export const getUserTokenId = async () => {
    const user = FirebaseAuth.currentUser;
    if (user) {
        const idToken = await user.getIdToken(true); 
        return {idToken, expirationTime: user.stsTokenManager.expirationTime}
    } else {
        return new Promise(async resolve => {
            if (user) {
                resolve(true);
            } else {
                const unsubscribe = onAuthStateChanged(FirebaseAuth, async function (user) {
                    unsubscribe();
                    if (user) {
                        const idToken = await user.getIdToken(true);
                        resolve({idToken, expirationTime: user.stsTokenManager.expirationTime});
                    } else {
                        resolve(false);
                    }
                });
            }
        });
    }
}