function sumArray(arr1, arr2) {
    let result = arr1.reduce((a, b) => a + b, 0);
    arr1.forEach(item => (result += item));
    arr2.forEach(item => (result += item));
    return result;
}
