import { useParams } from "react-router-dom"
import { useGetMove } from "../hooks/useGetMove"
import { Loading } from "../../ui/components";
import { capitalize } from "../../helpers";
import { MoveRoutes } from "../routes/MoveRoutes";
import { useContext } from "react";
import { MoveContext } from "../context/MoveContext";



export const MovePage = () => {

    const { id_name } = useParams();

    const { isLoading } = useGetMove(id_name);

    const { move } = useContext(MoveContext)


    return (
        <>
            {
                !isLoading && move ?
                    <div>
                        <h1 className="text-center mt-5">{capitalize(move.name)}</h1>
                        <MoveRoutes />
                    </div>
                    :
                    <Loading />
            }
        </>
    )
}
