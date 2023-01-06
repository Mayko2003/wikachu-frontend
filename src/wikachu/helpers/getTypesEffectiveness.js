import { typeDefenses } from '../data'

export const getTypesEffectiveness = (types, targetType) => {
    let effectiveness = 1
    targetType = targetType.toLowerCase()
    types?.forEach(type => effectiveness *= typeDefenses[type.type.name][targetType])
    return effectiveness
}