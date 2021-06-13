// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped (without duplicates).

// input: [1,2,2,2,7], [2,2,6,6,7]
//       idx1         idx2
// output: [2,7]

function intersection(arr1, arr2) {
    let idx1 = 0; // define indexes for both arrays
    let idx2 = 0;

    const len1 = arr1.length; // fix the lengths
    const len2 = arr2.length;

    const result = []; // set a result
    // [2, 7]

    // while loop is a for loop + an if statement
    // as long as we don't read off an array
    while (idx1 < len1 && idx2 < len2) {
        // walk the smaller idx forward
        if (arr1[idx1] < arr2[idx2]) {
            idx1++;
        } else if (arr1[idx1] > arr2[idx2]) {
            idx2++;
            // else they are equal
        } else {
            // double check we've not already added this number
            if (result[result.length - 1] !== arr1[idx1]) {
                result.push(arr1[idx1]);
            }
            // walk forward both indexes
            idx1++;
            idx2++;
        }
    }

    return result;
}

// remember that the inputs and outputs are already sorted!!

// 1-255
// are the lengths of the inputs the same? no
// please do not use any built in or helper functions
// ideal solution is solve for 0(n) if you can
// can they be negative? no
// can the arrays be empty? yes

// sets contain only unique values
// multisets can contain duplicates

// you may use addtional arrays or objects as temporary storage (space constaints)