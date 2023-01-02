
export const capitalize = (str) => {
    if(str === undefined) return str;
    return str
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
};