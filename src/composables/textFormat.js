export const useFormatText = () => {
    function formatUpperAndSpacing(text) {
        const regex = /([a-z])([A-Z])/g;
        const replaceFn = (match, p1, p2) => p1 + ' ' + p2;
        return Array.from(text)[0].toUpperCase() + text.slice(1).replace(regex, replaceFn);
    } 

    function formatUpperFirstLetter(text) {
        return Array.from(text)[0].toUpperCase() + text.slice(1);
    }

    return {
        formatUpperAndSpacing,
        formatUpperFirstLetter
    }
}