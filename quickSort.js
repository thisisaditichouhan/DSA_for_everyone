function quickSorty (Inputarray) {
    if (Inputarray.length <= 1){
        return Inputarray;
    }

    var pivotElement = Inputarray[0];
    var smallElements = [];
    var largerElements = [];

    for (let x = 1; x < Inputarray.length; x++){
        if (Inputarray[x] < pivotElement){
            smallElements.push(Inputarray[x])
        }
        else {
            largerElements.push(Inputarray[x])
        }
    }
    return [...quickSorty(smallElements), pivotElement, ...quickSorty(largerElements)];
}

var a = quickSorty([10,3,4,5,6])
console.log(a)