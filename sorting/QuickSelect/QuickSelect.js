function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function partition(array, left, right) {

    pivot = array[Math.floor((left + right) / 2)];

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
            right--
        }
    }

    return left;
}

function quickSelect(array, left, right, k){
    index = partition(array, left, right);

    if(index == (k - 1)){
        return array[index];
    }else if(index > (k - 1)){
        return quickSelect(array, left, index - 1, k);
    }else{
        return quickSelect(array, index + 1, right, k);
    }

    
}

const arr = [1, 3, 3, -2, 3, 14, 7, 8, 1, 2, 2];

console.log(quickSelect(arr, 0, arr.length - 1, 5)); //2
console.log(quickSelect(arr, 0, arr.length - 1, 10)); //7
