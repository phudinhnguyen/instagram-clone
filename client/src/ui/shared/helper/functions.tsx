export const indexOfArrayObject = (array, key: string, value) => {
    if (!Array.isArray(array)) return
    let index: number
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item[key] == value) {
            index = i
            break
        }
    }
    return index
}