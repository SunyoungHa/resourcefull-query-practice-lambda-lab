// Implement a function that merges two arrays of numbers into a single array and then sort the final array.

// 1. use concat method
// 2. use array method
// 3.result of [1, 3, 5], [2, 4, 6]  Output: [1, 2, 3, 4, 5, 6]

function mergerSortTwoArray(arr1, arr2) {
	return arr1.concat(arr2).sort((a, b) => a - b);
}

console.log(mergerSortTwoArray([1, 3, 5], [2, 4, 6]));
