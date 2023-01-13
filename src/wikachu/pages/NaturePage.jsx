import { useParams } from "react-router-dom";
import { capitalize } from "../../helpers";
import { Loading } from "../../ui/components";
import { GenericTag, BerryList } from "../components/NatureInfo";
import { useGetNature, useBerries } from "../hooks";
import { typeStats, typeFlavors } from "../data/";

export const NaturePage = () => {
    const { id_name } = useParams();
    const {
        berries,
        isLoading,
        name,
        decreased_stat,
        hates_flavor,
        increased_stat,
        likes_flavor
    } = useGetNature(id_name);

    const berriesLiked = useBerries(berries.berriesLiked);
    const berriesDisliked = useBerries(berries.berriesDisliked);

    return (
        <>
            {
                !isLoading ?
                    <>
                        <div className="row align-items-center m-0">
                            <h1>{capitalize(name)}</h1>
                            <div className="col-12">
                                <ul className="list-group">
                                    <li className="list-group-item bg-transparent text-light">
                                        <strong>Decreased stat:</strong>
                                        {
                                            decreased_stat == null ?
                                                <span> Not affected</span>
                                                :
                                                <GenericTag property={typeStats[decreased_stat?.name]} incresead={false} />
                                        }
                                    </li>
                                    <li className="list-group-item bg-transparent text-light">
                                        <strong>Incresead stat: </strong>
                                        {
                                            increased_stat == null ?
                                                <span> Not affected</span>
                                                :
                                                <GenericTag property={typeStats[increased_stat?.name]} incresead={true} />
                                        }
                                    </li>
                                    <li className="list-group-item bg-transparent text-light">
                                        <strong>Hates flavor:</strong>
                                        {
                                            hates_flavor == null ?
                                                <span> None</span>
                                                :
                                                <GenericTag property={typeFlavors[hates_flavor?.name]} />
                                        }
                                        {
                                            !berriesDisliked.isLoading ?
                                            <BerryList berries={berriesDisliked?.data}/>
                                            :
                                            <Loading/>
                                        }
                                    </li>
                                    <li className="list-group-item bg-transparent text-light">
                                        <strong>Likes flavor:</strong>
                                        {
                                            likes_flavor == null ?
                                                <span> None</span>
                                                :
                                                <GenericTag property={typeFlavors[likes_flavor?.name]} />
                                        }
                                        {
                                            !berriesLiked.isLoading ?
                                            <BerryList berries={berriesLiked?.data}/>
                                            :
                                            <Loading/>   
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                    :
                    <Loading />
            }
        </>
    )
}
