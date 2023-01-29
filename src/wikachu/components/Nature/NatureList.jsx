import { NatureCard } from "./"
import { Loading } from '../../../ui/components'
import { useGetNaturesByIds } from "../../hooks/"


export const NatureList = ({ list }) => {

    const { data, isLoading, handleLoadMore } = useGetNaturesByIds(list)

    return (
        <div className="row mx-auto col-md-8 animate__animated animate__fadeIn">
            {
                !isLoading ?

                    <div className="row mx-auto">
                        {
                            data.map(nature => (
                                <NatureCard key={nature.id} nature={nature} />
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
