function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function selectionSort(array) {

    let minIndex;

    for (let i = 0; i < array.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }

        if (i != minIndex) {
            swap(array, i, minIndex);
        }

    }

    return array;
}

console.log(selectionSort([6, 1, 23, 4, 2, 3]));