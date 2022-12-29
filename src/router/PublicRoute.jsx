import { useContext } from "react"
import { AuthContext } from "../auth/context"


export const PublicRoute = ({ children, restricted }) => {

    const { logged } = useContext(AuthContext)


    return restricted && logged ? <Navigate to="/home" /> : children
}
