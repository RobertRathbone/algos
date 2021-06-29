 
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return the index of that value, or -1 if not found.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/

/**
 * - Time: O(n log(n)) logarithmic due to divide and conquer approach
 *    (continually splitting in half).
 * - Space: O(1) constant.
 */
function binarySearch(sortedNums, searchNum) {
  let leftIdx = 0;
  let rightIdx = sortedNums.length - 1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((rightIdx + leftIdx) / 2);

    if (sortedNums[midIdx] === searchNum) {
      return midIdx;
    }

    if (searchNum < sortedNums[midIdx]) {
      rightIdx = midIdx - 1;
    } else {
      leftIdx = midIdx + 1;
    }
  }
  return -1;
  // Bonus:
  // return 0;
}


const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = -1;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = 1;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = 0;
//             0  1  2  3  4   5   6   7   8  9   10
const nums4 = [1, 3, 5, 8, 9, 12, 16, 19, 22, 25, 27];
const searchNum4 = 9;
const expected4 = 4;

console.log(binarySearch(nums4, searchNum4));

module.exports = { binarySearch };



/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @return {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum) {
    binarySearchInner(sortedNums, searchNum, 0, sortedNums.length - 1)
}

function binarySearchInner(sortedNums, searchNum, leftIdx, rightIdx)

module.exports = { binarySearch };