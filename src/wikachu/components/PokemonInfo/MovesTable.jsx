import { capitalize, splitCharacter } from "../../../helpers"
import { pokemonTypes } from "../../data"
import { TypeTag } from "../Pokemon/TypeTag"


export const MovesTable = ({ moves }) => {
    return (
        <table className="table text-white">
            <thead>
                <tr>
                    <th scope="col">Lvl.</th>
                    <th scope="col">Move</th>
                    <th scope="col">Type</th>
                    <th scope="col">Cat.</th>
                    <th scope="col">Power</th>
                    <th scope="col">Acc.</th>
                </tr>
            </thead>
            <tbody>
                {
                    moves.length ? moves.map(move => (
                        <tr key={`${move.name}-${move.method}`}>
                            <th scope="row">
                                {move.level}
                            </th>
                            <td>
                                {capitalize(splitCharacter(move.name, '-'))}
                            </td>
                            <td>
                                <TypeTag type={pokemonTypes[move.type]} />
                            </td>
                            <td>
                                <img src={`/icons/${move.category}_attack_icon.jpg`} alt="category" className="table-icon" />
                            </td>
                            <td>
                                {move.power ? move.power : '---'}
                            </td>
                            <td>
                                {move.accuracy ? move.accuracy : '---'}
                            </td>
                        </tr>
                    )) :
                        <tr>
                            <td colSpan="6" className="text-center">No moves</td>
                        </tr>
                }
            </tbody>
        </table>
    )
}
