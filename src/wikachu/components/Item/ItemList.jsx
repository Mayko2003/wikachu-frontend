import { ItemCard } from "./"
import { Loading } from '../../../ui/components'
import { useGetItemsByIds } from "../../hooks/Item/useGetItemsByIds.JS"


export const ItemList = ({ list }) => {

    const { data, isLoading, handleLoadMore } = useGetItemsByIds(list)

    return (
        <div className="row mx-auto col-md-8 animate__animated animate__fadeIn">
            {
                !isLoading ?

                    <div className="row mx-auto">
                        {
                            data.map(item => (
                                <ItemCard key={item.id} item={item} />
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
