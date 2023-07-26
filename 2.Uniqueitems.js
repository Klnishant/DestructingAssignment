function removeDuplicates(nums_array){
    return new Set(nums_array);
}

const nums_array=[1, 2, 3, 2, 4, 5, 1, 6, 7, 3];

console.log("Unique Numbers:",removeDuplicates(nums_array));