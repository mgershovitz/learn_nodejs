function reduce(arr, fn, initial) {
    
    function recursive_reduce(index,previous_result) {
        if (index >= arr.length) return previous_result;
        else return recursive_reduce(index+1, fn(previous_result, arr[index], index, arr))
    }
    return recursive_reduce(0, {});
    //
    // if (arr.length <= 0) return initial;
    // else reduce(arr.slice(1,), fn, fn(initial, arr[0]));

}

module.exports = reduce;