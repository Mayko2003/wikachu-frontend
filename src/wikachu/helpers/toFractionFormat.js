
export const toFractionFormat = (number) => {
    if (number === 0.5) return '½'
    if(number === 0.25) return '¼'
    if(number === 0.75) return '¾'
    return number
}