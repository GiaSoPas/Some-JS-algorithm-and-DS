function linearSearch(array, k){

    for(let i = 0; i < array.length; i++){

        if(array[i] == k){

            return true;
        }
    }
    
    return false;
}

console.log(linearSearch([2,3,5,53,5,6,97],6));

console.log(linearSearch([2,3,5,53,5,6,97],1));
