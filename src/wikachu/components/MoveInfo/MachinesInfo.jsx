import { useContext } from "react"
import { MoveContext } from "../../context/MoveContext"
import { useGetMachines } from "../../hooks"
import { capitalize, splitCharacter } from "../../../helpers"


export const MachinesInfo = () => {

    const { move } = useContext(MoveContext)

    const { isLoading, data } = useGetMachines(move.machines)

    return (
        !isLoading &&
        <div className="glass-card mx-3 mt-3">
            <h3 className="text-center my-3">Machines Version Groups</h3>
            <div className="row mx-4 mb-3">
                {
                    data.map(machine => (
                        <div key={machine.id} className="col-sm-6 col-md-4 border border-1 border-secondary text-center">
                            <h5 className="mt-2">{capitalize(splitCharacter(machine.version_group.name,'-'))}</h5>
                            <p>{machine.item.name.toUpperCase()}</p>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
