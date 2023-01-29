import { useEffect, useState } from "react"
import { getMoves } from "../../../api/backend/"


export const useGetListMove = () => {

    const [list, setlist] = useState(null)

    const getList = async () => {

        const list = await getMoves()

        setlist(list)
    }


    useEffect(() => {
        getList()
    }, [])


    return list
}
