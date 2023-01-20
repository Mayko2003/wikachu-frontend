import { useEffect, useState } from "react"


export const useGetMachines = (listMachines) => {

    const [state, setState] = useState({
        data: [],
        isLoading: true
    })

    const getMachines = async () => {
        if (!listMachines) return;

        const machines = await Promise.all(listMachines.map(async ({ machine }) => {
            const resp = await fetch(machine.url)
            const data = await resp.json()
            return data
        }))

        return machines
    }

    useEffect(() => {
        getMachines()
            .then(machines => {
                setState({
                    data: machines,
                    isLoading: false
                })
            })
    }, [listMachines])


    return {
        ...state
    }
}
