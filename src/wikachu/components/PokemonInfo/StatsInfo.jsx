import { capitalize, splitCharacter } from "../../../helpers";
import { getMinMaxStats } from "../../helpers";

export const StatsInfo = ({ stats }) => {

    const { maxStats, minStats } = getMinMaxStats(stats);

    return (
        <div className="animate__animated animate__fadeInUp">
            <h2>Stats</h2>
            <div className="row glass-card m-0 p-2">
                <div className="col-xl-3 mb-xl-0 mb-2 d-flex flex-column">
                    <h2 className="h5">Base Stats</h2>
                    <ul className="list-group h-100">
                        {
                            stats?.map(({ base_stat, stat }) => (
                                <li key={stat.name} className='list-group-item bg-transparent text-light'>{capitalize(splitCharacter(stat.name, '-'))}: {base_stat}</li>
                            ))
                        }
                        <li className="list-group-item bg-transparent text-light">
                            <strong>Total: </strong> {stats?.reduce((acc, { base_stat }) => acc + base_stat, 0) || 0}
                        </li>
                    </ul>
                </div>
                <div className="col-xl-5 mb-xl-0 mb-2 d-flex flex-column">
                    {/* Grafico */}
                    <h2 className="h5">Graphic</h2>
                    <ul className="list-group h-100">
                        {
                            stats?.map(({ base_stat, stat }) =>
                                <li className="list-group-item bg-transparent text-light h-100" key={stat.name}>
                                    <div className="progress glass-card">
                                        <div
                                            className='progress-bar bg-warning'
                                            role="progressbar"
                                            aria-valuenow="0"
                                            aria-valuemin="0"
                                            aria-valuemax="1000"
                                            style={{ width: `${base_stat * 100 / 255}%`, opacity: 0.5 }}
                                        >
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                        <li className="list-group-item bg-transparent text-light h-100 border-0"></li>
                    </ul>

                </div>
                <div className="col-xl-2 col-6 d-flex flex-column">
                    <h2 className="h5">Min Stats</h2>
                    <ul className="list-group h-100">
                        {minStats?.map(({ value, name }) => (
                            <li className="list-group-item bg-transparent text-light h-100" key={name}>{value}</li>
                        ))}
                        <li className="list-group-item bg-transparent text-light h-100 border-0"></li>
                    </ul>
                </div>
                <div className="col-xl-2 col-6 d-flex flex-column">
                    <h2 className="h5">Max Stats</h2>
                    <ul className="list-group h-100">
                        {maxStats?.map(({ value, name }) => (
                            <li className="list-group-item bg-transparent text-light h-100" key={name}>{value}</li>
                        ))}
                        <li className="list-group-item bg-transparent text-light h-100 border-0"></li>
                    </ul>
                </div>

                <div className="text-muted mt-3">
                    <p>
                        The ranges shown on min and max stats are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 252 EVs, 31 IVs however minimum values are based on a hindering nature, 0 EVs, 0 IVs.
                    </p>
                </div>
            </div>
        </div>
    )
}
