// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr) {
    var len = arr.length; // fix the length
    for (var i = 0; i < len; i++) { // loop over every element
        for (var j = 0; j < len - i - 1; j++) { // go no further than length - i
            // compare and classic swap
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // return the given array
    return arr;
}

// i = 0, 1, 2
// j = 0, 1, 2
// arr
// arr[j]
// arr[i]
// arr[j-1]

bubbleSort([9, 2, 8, 3]);


// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/



// Selection Sort


// Selection sort works by iterating through the list,
// finding the minimum value,
// and moving it to the beginning of the list.

// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.

function selectionSort(arr) {
    var len = arr.length; // fix the length
    for (var i = 0; i < len; i++) {
        var min = i; // arbitrarily set i as min
        for (var j = i + 1; j <= len; j++) { // loop from i
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

// [2, 3, 8, 9]
//              m

// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.png