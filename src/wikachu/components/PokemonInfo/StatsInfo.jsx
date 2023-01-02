import { getMinMaxStats } from "../../helpers";

export const StatsInfo = ({ stats }) => {

    const { maxStats, minStats } = getMinMaxStats(stats);

    return (
        <div className="animate__animated animate__fadeInUp">
            <h2>Stats</h2>
            <div className="row glass-card m-0 p-2">
                <div className="col-3">
                    <h2 className="h5">Base Stats</h2>
                    <ul>
                        {stats?.map(({ base_stat, stat }) => (
                            <li key={stat.name}>{stat.name}: {base_stat}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-5">
                    {/* Grafico */}
                    <h2 className="h5">Graphic</h2>
                    {
                        stats?.map(({ base_stat, stat }) =>
                            <div className="progress mb-2 glass-card" key={stat.name}>
                                <div
                                    className='progress-bar bg-warning'
                                    role="progressbar"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="1000"
                                    style={{ width: `${base_stat * 100 / 255}%`, opacity: 0.5  }}
                                >
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="col-2">
                    <h2 className="h5">Min Stats</h2>
                    <ul>
                        {minStats?.map(({ value, name }) => (
                            <li key={name}>{value}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-2">
                    <h2 className="h5">Max Stats</h2>
                    <ul>
                        {maxStats?.map(({ value, name }) => (
                            <li key={name}>{value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
