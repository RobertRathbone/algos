/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/
//              0  1  2  3  4
const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @return {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {}

module.exports = { balanceIndex };

const nums1 = [-9, -5, -2, 9, -16];
function balanceIndex(nums) {
    var remove_index = 0;
    if (nums.length % 2 != 0) {
        remove_index = Math.floor(nums.length / 2)
    }
    var sum = 0;
    var sum_half = 0;
    for (var i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }
    sum = sum - nums[remove_index]
    for (i = 0; i < nums.length; i++) {
        sum_half = sum_half + nums[i]
        if (sum_half == sum / 2) {
            console.log(sum_half)
            return i + 1;
        }
    }
    return -1;
}
console.log(balanceIndex(nums1))



/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/

const nums1 = [1, 2, 3, 4, 10];
const expected1 = true;
// Explanation: between indices 3 & 4

const nums2 = [1, 2, 4, 2, 1];
const expected2 = false;

/**
 * Determines if there is a balance point BETWEEN indexes where the sum of the
 *    left side is equal to the sum of the right side of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @return {boolean} Indicates if a balance point exists.
 */
function balancePoint(nums) {}

module.exports = { balancePoint };

/*****************************************************************************/