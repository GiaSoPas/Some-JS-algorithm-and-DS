function merge(leftArr, rightArr) {
    let result = [], leftIndex = 0, rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        if(leftArr[leftIndex] < rightArr[rightIndex]){
            result.push(leftArr[leftIndex++]);
        }else{
            result.push(rightArr[rightIndex++]);
        }
    }

    let leftRemains = leftArr.slice(leftIndex), rightRemains = rightArr.slice(rightIndex);

    return result.concat(leftRemains).concat(rightRemains);

}

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    let mid = Math.floor((array.length) / 2);

    let leftArr = array.slice(0, mid);
    let rightArr = array.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.log(mergeSort([6,1,23,4,2,3]));