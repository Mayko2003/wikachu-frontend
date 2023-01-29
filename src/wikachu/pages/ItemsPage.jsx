import { ItemList } from "../components/Item"
import { useGetListItem } from "../hooks"


export const ItemsPage = () => {

    const allList = useGetListItem()

    return (
        <div className="mt-5">
            <h1 className="text-center mb-5">Find your item</h1>
            {
                allList && <ItemList list={allList} />
            }
        </div>
    )
}
