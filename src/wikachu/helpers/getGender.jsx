
export const getGender = (gender_rate) =>{
    switch(gender_rate){
        case 0:
            return {male: 100, female: 0}
        case 1:
            return {male: 87.5, female: 12.5}
        case 2:
            return {male: 75, female: 25}
        case 4:
            return {male: 50, female: 50}
        case 6:
            return {male: 25, female: 75}
        case 7:
            return {male: 12.5, female: 87.5}
        case 8:
            return {male: 0, female: 100}
        default:
            return undefined
    }
}