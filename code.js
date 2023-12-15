function permutationSort(arr) {
    let originalArray = [...arr]; 
    let permutations = []; 
    let perms = getPermutations(arr, 0, permutations);
    let sortedFound = false;
    for (let permutationsAt = 0; permutationsAt < perms.length; permutationsAt++) {
        if (isSorted(perms[permutationsAt])) {
            sortedFound = true;
            for (let j = 0; j < perms[permutationsAt].length; j++) {
                arr[j] = perms[permutationsAt][j];
            }
        }
    }
    return perms.length;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

function getPermutations(arr, start, count) {
    if (start === arr.length) {
        count.push([...arr]);
    } 
    else {
        for (let i = start; i < arr.length; i++) {
            swap(arr, start, i);
            getPermutations(arr, start + 1, count);
            swap(arr, start, i);
        }
    }
    return count; 
}
