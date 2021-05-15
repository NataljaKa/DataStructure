type CompareFunction<T> = (a: T, b: T) => number

export function mergeSort<T>(array: T[], compareFunction: CompareFunction<T>): T[] {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (compareFunction(array[i], array[j]) === 1) {
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array
}

export default mergeSort