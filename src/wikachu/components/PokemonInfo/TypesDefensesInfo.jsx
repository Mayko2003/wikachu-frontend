import { TypesDefenseTable } from "./TypesDefenseTable"


export const TypesDefensesInfo = ({types}) => {
    return (
        <div className="animate__animated animate__fadeInUp">
            <h2>Types Defenses</h2>
            <div className="glass-card py-3">
                <TypesDefenseTable types={types} />
            </div>
        </div>
    )
}
