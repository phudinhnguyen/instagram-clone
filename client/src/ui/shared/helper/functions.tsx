export const indexOfArrayObject = (array, key: string, value) => {
    if (!Array.isArray(array)) return
    let index: number
    for (let i = 0; i < array.length; i++) {
        const item = array[ i ];
        if (item[ key ] == value) {
            index = i
            break
        }
    }
    return index
}

export const debounce = (callback, delay) => {
    let timeoutHandler = null;
    return (...args) => {
        if (timeoutHandler) {
            clearTimeout(timeoutHandler);
        }
        timeoutHandler = setTimeout(() => {
            callback(...args);
            timeoutHandler = null;
        }, delay);
    };
};