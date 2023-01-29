import { NatureList } from "../components/Nature"
import { useGetListNature } from "../hooks"


export const NaturesPage = () => {

    const list = useGetListNature()

    return (
        <div className="mt-5">
            <h1 className="text-center mb-5">Find your nature</h1>
            {
                list && <NatureList list={list} />
            }
        </div>
    )
}
