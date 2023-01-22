import { useMovesPokemon } from "../../hooks/"
import { MovesTable } from "./";
import { filterMovesByMethod } from "../../helpers/";
import { Loading } from "../../../ui/components/Loading";

export const MovesInfo = ({ moves }) => {

    const { data, isLoading } = useMovesPokemon(moves);


    return (
        !isLoading ?
            <div className="animate__animated animate__fadeInUp">
                <h2>Moves</h2>
                <div className="row m-0 glass-card p-2 table-container">
                    <div className="col-xl-6 d-flex flex-column h-0 table-level">
                        <h3>Level Up</h3>
                        <MovesTable moves={filterMovesByMethod(data, 'level-up')} scope='Lvl.' />
                    </div>
                    <div className="col-xl-6 table-machine">
                        <h3>Machine</h3>
                        <MovesTable moves={filterMovesByMethod(data, 'machine')} scope='TM/HMO' />

                    </div>
                    <div className="col-xl-6 mt-2 table-egg">
                        <h3>Egg Move</h3>
                        <MovesTable moves={filterMovesByMethod(data, 'egg')} />

                    </div>
                </div>
            </div> :
            <Loading />
    )
}
