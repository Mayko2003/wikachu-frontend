
export const getMinMaxStats = (baseStats) => {

    const maxStats = [], minStats = [];

    baseStats?.forEach(({base_stat, stat}) => {

        if(stat.name==='hp'){
            maxStats.push(
                { name : stat.name, value : Math.floor(base_stat*2+204) }
            );
            minStats.push(
                { name : stat.name, value : Math.floor(base_stat*2+110) }
            );
        }else{
            maxStats.push(
                { name : stat.name, value : Math.floor((base_stat*2+99)*1.1)}
            );
            minStats.push(
                { name : stat.name, value : Math.floor((base_stat*2+5)*0.9) }
            );
        }
    });

    return {
        maxStats,
        minStats
    }
}
