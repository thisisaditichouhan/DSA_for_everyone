function mergeSort(inputArray){
    if (inputArray.length<=1){
        return inputArray //A single element array is already sorted.
    }

    const mid = Math.floor(inputArray.length/2);
    const left = inputArray.slice(0,mid);
    const right = inputArray.slice(mid);

    //recursively divide the array and merge the sorted arrays

    return Merging(mergeSort(left),mergeSort(right))
}

function Merging(left,right){
    var result = []
    var i = 0;
    var j = 0;

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i]);
            i++;
        }else {
            result.push(right[j]); j++;
        }
    }

    //copy the remaining elements
    while(i<left.length){
        result.push(left[i]); i++;
    }

    while (j<right.length){
        result.push(right[j]); j++;
    }

    return result;
}

const inputArray = [8, 5, 2, 9, 5, 6, 3];
const sortedArray = mergeSort(inputArray);
console.log(sortedArray);