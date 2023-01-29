import { MoveCard } from "./"
import { Loading } from '../../../ui/components'
import { useGetMovesByIds } from "../../hooks/"


export const MoveList = ({ list }) => {

    const { data, isLoading, handleLoadMore } = useGetMovesByIds(list)

    return (
        <div className="row mx-auto col-md-8 animate__animated animate__fadeIn">
            {
                !isLoading ?

                    <div className="row mx-auto">
                        {
                            data.map(move => (
                                <MoveCard key={move.id} move={move} />
                            ))
                        }
                        <div className="d-flex justify-content-center mt-4">
                            <button className="text-center btn btn-wk-primary text-light" onClick={handleLoadMore}>
                                Load more
                            </button>
                        </div>
                    </div>

                    :
                    <Loading />
            }
        </div>
    )

}
