function insertionSort(array) {
    let key;
    let len = array.length;

    let i, j;

    for (i = 1; i < len; i++) {
        key = array[i];
        j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }

        array[j + 1] = key;
    }

    return array;
}

console.log(insertionSort([6, 1, 23, 4, 2, 3]));