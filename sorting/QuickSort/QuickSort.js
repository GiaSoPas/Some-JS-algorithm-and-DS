function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function quickSort(array) {
    return quickSortHelper(array, 0, array.length - 1);
}

function quickSortHelper(array, left, right) {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right);

        if (left < index - 1) {
            quickSortHelper(array, left, index - 1);
        }

        if (index < right) {
            quickSortHelper(array, index, right);
        }
    }
    return array;
}

function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)];
    while (left <= right) {
        while (pivot > array[left]) {
            left++;
        }
        while (pivot < array[right]) {
            right--;
        }
        if (left <= right) {
            swap(array, left, right);
            left++;
            right--;
        }
    }
    return left;
}

console.log(quickSort([6, 1, 23, 9, 4, 2,1, 30, 3, 5, 5, 7, 10, 8]));