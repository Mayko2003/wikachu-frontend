import { useEffect, useState } from "react"
import { getNatures } from "../../../api/backend/"


export const useGetListNature = () => {

    const [list, setlist] = useState(null)

    const getList = async () => {

        const list = await getNatures()

        setlist(list)
    }


    useEffect(() => {
        getList()
    }, [])


    return list
}
