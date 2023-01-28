import { useNavigate } from "react-router-dom";
import { capitalize } from "../../../helpers";

export const BerryItem = ({ name, image }) => {

    const navigate = useNavigate();

    const onClickToItem = (name) => {
        navigate(`/item/${name}-berry`);
    }

    return (
        <div className="col-4 col-sm-3 col-md-2 col-lg-1">
            <button type="button" className="btn text-light" onClick={() => onClickToItem(name)}>
                <div>
                    <img src={image} alt={name} />
                </div>
                <div>
                    {capitalize(name)}
                </div>
            </button>
        </div>
    )
}
