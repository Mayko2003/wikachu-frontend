import { getMinMaxStats } from "../helpers/getMinMaxStats";

export const StatsInfo = ({ stats }) => {
  
  const { maxStats, minStats } = getMinMaxStats(stats);

  return (
    <>
      <h2>Stats</h2>
      <div className="row">
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
          <h2 className="h5">Grafico</h2>
          {

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
    </>
  )
}
