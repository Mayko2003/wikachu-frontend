import { useMoves } from "../hooks/useMoves"
import { MovesTable } from "./MovesTable";
import { filterMovesByMethod } from "../helpers/filterMovesByMethod";
import { Loading } from "../../ui/components/Loading";

export const MovesInfo = ({ moves }) => {

    const { data, isLoading } = useMoves(moves);


    return (
        !isLoading ?
            <div className="animate__animated animate__fadeInUp">
                <h2>Moves</h2>
                <div className="row m-0 glass-card p-2 ">
                    <div className="col-md-6 d-flex flex-column h-0">
                        <h3>Level Up</h3>
                        <MovesTable moves={filterMovesByMethod(data, 'level-up')} />
                    </div>
                    <div className="col-md-6">
                        <h3>Machine</h3>
                        <MovesTable moves={filterMovesByMethod(data, 'machine')} />

                    </div>
                    <div className="col-md-6 mt-2">
                        <h3>Egg Move</h3>
                        <MovesTable moves={filterMovesByMethod(data, 'egg')} />

                    </div>
                </div>
            </div> :
            <Loading />
    )
}
