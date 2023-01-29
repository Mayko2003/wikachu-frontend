import { MoveList } from "../components/Move"
import { useGetListMove } from "../hooks"


export const MovesPage = () => {

    const list = useGetListMove()


    return (
        <div className="mt-5">
            <h1 className="text-center mb-5">Find your move</h1>
            {
                list && <MoveList list={list} />
            }
        </div>
    )
}
