import { useEffect, useState } from "react"
import { getItems } from "../../../api/backend/"


export const useGetListItem = () => {

    const [list, setlist] = useState(null)

    const getList = async () => {

        const list = await getItems()

        setlist(list)
    }


    useEffect(() => {
        getList()
    }, [])


    return list
}
