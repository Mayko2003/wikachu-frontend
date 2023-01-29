import { useContext } from "react";
import { capitalize, splitCharacter } from "../../../helpers"
import { MoveContext } from "../../context/MoveContext";

export const MoveEffects = () => {

    const { move } = useContext(MoveContext);

    return (
        <>
            <h3 className="text-center">Move Effects</h3>
            <div className="list-group mx-2">
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted me-2 my-auto'>Effect: </strong>
                    {move.effect_entries[0]?.effect}
                </li>
                <li className="list-group-item bg-transparent text-white">
                    <strong className='text-muted me-2 my-auto'>Changes </strong>
                    <ul>
                        {
                            move.effect_changes.map((change, i) => (
                                <li key={i}>
                                    In {capitalize(splitCharacter(change.version_group.name, '-'))}, {change.effect_entries[0].effect}
                                </li>
                            ))
                        }
                    </ul>
                </li>
            </div>
        </>
    )
}
