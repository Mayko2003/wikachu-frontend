
import { MoveData, MoveEffects } from './'

export const MoveInfo = () => {

    return (
        <div className="glass-card mx-3 mt-3">
            <div className="row">
                <div className="col-md-6 p-3">
                    <MoveData />
                </div>
                <div className="col-md-6 p-3">
                    <MoveEffects />
                </div>
            </div>
        </div>
    )
}
