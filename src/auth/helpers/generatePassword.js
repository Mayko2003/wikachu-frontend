export const generatePassword = () => {
    var buf = new Uint8Array(8);
    window.crypto.getRandomValues(buf);
    return btoa(String.fromCharCode.apply(null, buf));
}
