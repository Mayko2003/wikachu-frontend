import { useContext } from "react";
import { pokemonTypes } from "../../data";
import { TypeTag } from "../Pokemon";
import { MoveContext } from "../../context/MoveContext";

export const MoveData = () => {

    const { move } = useContext(MoveContext)

    return (
        <>
            <h3 className="text-center">Move Data</h3>
            <div className="list-group mx-2">
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted me-2 my-auto'>Type </strong>
                    <TypeTag type={pokemonTypes[move.type.name]} />
                </li>
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted me-2 my-auto'>Category </strong>
                    <img src={`/icons/${move.damage_class?.name}_attack_icon.jpg`} alt="category" className="table-icon" />
                </li>
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted me-2 my-auto'>Power </strong>
                    {move.power}
                </li>
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted me-2 my-auto'>Accuracy </strong>
                    {move.accuracy}
                </li>
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted me-2 my-auto'>PP </strong>
                    {move.pp}
                </li>
            </div>
        </>
    )
}
