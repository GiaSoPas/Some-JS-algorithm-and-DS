function recursiveBinarySearch(array, start, end, k){
    
    //Base condition 
    if (start > end) return false;

    let mid = Math.floor((start + end)/2);

    if (array[mid] == k) return true;

    if (array[mid] > k){
        return recursiveBinarySearch(array, start, mid - 1, k);
    }else{
        return recursiveBinarySearch(array, mid + 1, end, k);
    }
}

console.log(recursiveBinarySearch([-121, 2, 3, 4, 5, 71, 102], 0, 6, 4));
console.log(recursiveBinarySearch([-121, 2, 3, 4, 5, 71, 102], 0, 6, 1));
console.log(recursiveBinarySearch([-121, 2, 3, 4, 5, 71, 102], 0, 6, 102));