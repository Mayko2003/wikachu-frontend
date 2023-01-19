import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "./config";

export const getCurrentUserFirebase = () => {
    const user = FirebaseAuth.currentUser;
    if (user) {
        return { username: user.displayName, id: user.uid };
    } else {
        return new Promise(resolve => {
            if (user) {
                resolve(true);
            } else {
                const unsubscribe = onAuthStateChanged(FirebaseAuth, function (user) {
                    unsubscribe();
                    if (user) {
                        resolve({ username: user.displayName, id: user.uid });
                    } else {
                        resolve(false);
                    }
                });
            }
        });
    }
}
