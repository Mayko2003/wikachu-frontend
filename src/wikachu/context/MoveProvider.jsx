import { useState } from "react"
import { MoveContext } from "./MoveContext"


export const MoveProvider = ({ children }) => {

    const [move, setMove] = useState({});

    const changeMove = (move) => {
        setMove(move);
    }

    return (
        <MoveContext.Provider value={{ move, changeMove }}>
            {children}
        </MoveContext.Provider>
    )
}
