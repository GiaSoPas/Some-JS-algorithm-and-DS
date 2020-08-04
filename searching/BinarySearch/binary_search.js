function binarySearch(array, k){
    let start = 0;
    let end = array.length - 1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if (array[mid]==k) return true;

        else if(array[mid] < k){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

    return false;

}

console.log(binarySearch([1,2,3,4], 4));
console.log(binarySearch([1,2,3,4], 5));