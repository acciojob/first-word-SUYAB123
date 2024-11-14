function firstWord(str) {
    if (str === '') {
        return '';
    }
    const spaceIndex = str.indexOf(' ');
    if (spaceIndex === -1) {
        return str;
    }
    return str.slice(0, spaceIndex);
}
