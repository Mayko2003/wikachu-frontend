import { useNavigate } from "react-router-dom";

export const BerryItem = ({name,image}) => {

    const navigate = useNavigate();

    const onClickToItem = (name) => {
        navigate(`/item/${name}-berry`);
    }

    return (
        <div className="col-3 col-sm-2 col-md-1">
            <button type="button" className="btn text-light" onClick={() => onClickToItem(name)}>
                <div>
                    <img src={image} alt={name} />
                </div>
                <div>
                    {name}
                </div>
            </button>
        </div>
    )
}
