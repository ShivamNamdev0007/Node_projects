const binarySearch = require('./binary');

const arr = [1, 2, 3, 4, 5];
const target = 3;
console.log(`Index of ${target}: ${binarySearch(arr, target)}`);