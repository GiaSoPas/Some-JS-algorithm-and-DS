function countSort(array) {
    let hash = {},
        countArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!hash[array[i]]) {
            hash[array[i]] = 1;
        } else {
            hash[array[i]]++;
        }
    }

    for (let key in hash) {
        // for any number of _ element, add it to array
        for (let i = 0; i < hash[key]; i++) {
            countArr.push(parseInt(key));
        }
    }

    return countArr;
}
console.log(countSort([6, 1, 23, 2, 3, 2, 1, 2, 2, 3, 3, 1, 123, 123, 4, 2, 3])); // [1, 2, 3, 4, 6, 23]