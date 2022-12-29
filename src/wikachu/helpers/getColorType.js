
export const getColorType = (type) => {
    switch (type) {
        case 'normal':
            return { background: '#aaaa99' };
        case 'fire':
            return { background: '#f42' };
        case 'water':
            return { background: '#39f' };
        case 'electric':
            return { background: '#fc3' };
        case 'grass':
            return { background: '#7c5' };
        case 'ice':
            return { background: '#6cf' };
        case 'fighting':
            return { background: '#b54' };
        case 'poison':
            return { background: '#a59' };
        case 'ground':
            return { background: '#db5' };
        case 'flying':
            return { background: '#89f' };
        case 'psychic':
            return { background: '#f59' };
        case 'bug':
            return { background: '#ab2' };
        case 'rock':
            return { background: '#ba6' };
        case 'ghost':
            return { background: '#66b' };
        case 'dragon':
            return { background: '#76e' };
        case 'dark':
            return { background: '#754' };
        case 'steel':
            return { background: '#aab' };
        case 'fairy':
            return { background: '#e9e' };
    }
}
