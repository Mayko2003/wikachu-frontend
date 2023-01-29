import { useParams } from "react-router-dom";
import { capitalize, splitCharacter } from "../../helpers";
import { Loading } from "../../ui/components/Loading";
import { useGetItem } from "../hooks";
import { EffectsItemList, AttributeItemList } from "../components/ItemInfo";


export const ItemPage = () => {
    const { id_name } = useParams();
    const {
        isLoading,
        name,
        sprites,
        category,
        effect_entries,
        flavor_text_entries,
        cost,
        attributes,
        fling_effect,
        fling_power
    } = useGetItem(id_name);

    return (
        !isLoading ?
            <>
                <h1 className="text-center mt-5 mb-3">
                    {splitCharacter(capitalize(name), '-')}
                    {
                        sprites.default ?
                            <img src={sprites?.default} alt="" style={{ height: '2em', width: '2em' }} />
                            :
                            <span>Not available</span>
                    }
                </h1>
                <div className="row align-items-center m-0">
                    <div className="">
                        <ul className="list-group glass-card">
                            <li className="list-group-item bg-transparent text-light">
                                <strong>Category: </strong>
                                {splitCharacter(capitalize(category?.name), '-')}
                            </li>
                            <li className="list-group-item bg-transparent text-light">
                                <strong>Effects</strong>
                                {
                                    effect_entries.length === 0 ?
                                        <EffectsItemList effects={flavor_text_entries} type='optional' />
                                        :
                                        <EffectsItemList effects={effect_entries} type='default' />
                                }
                            </li>
                            <li className="list-group-item bg-transparent text-light">
                                <strong>Cost:</strong>  {cost}
                            </li>
                            {
                                attributes.length > 0 &&
                                <li className="list-group-item bg-transparent text-light">
                                    <strong>Attributes</strong>
                                    <AttributeItemList attributes={attributes} />
                                </li>
                            }
                            {
                                fling_effect && fling_power &&
                                <li className="list-group-item bg-transparent text-light">
                                    <strong>Fling</strong>
                                    <ul>
                                        <li>
                                            <strong>Fling power:</strong>  {fling_power}
                                        </li>
                                        <li>
                                            <strong>Fling effect:</strong> {fling_effect?.name}
                                        </li>
                                    </ul>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </>
            :
            <Loading />
    )
}
