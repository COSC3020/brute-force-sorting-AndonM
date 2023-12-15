function permutationSort(arr) {
    if ( 
    function isSorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function permute(arr, start, count) {
        if (start === arr.length) {
            if (isSorted(arr)) {
                return count;
            }
            return count + 1;
        }
        let totalTries = count;
        for (let i = start; i < arr.length; i++) {
            swap(arr, start, i);
            totalTries = permute([...arr], start + 1, totalTries);
            swap(arr, start, i);
        }
        return totalTries;
    }
    return permute(a.slice(), 0, 0);
}
