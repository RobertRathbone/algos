/* 

Possible topics to explore: 
  1.) Iterating over strings
  2.) Immutability
  3.) while loops / or for loops ?
  4.) (extra) let, const and var

*/

/*
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @return {string} The given str reversed.
 */



/* function with string parameter
 * var for new string (for reversed string)
 * for loop length of string paramteter iterate one character at a time
 * populate new string using index - iteration
 * we go backwards to start the new string at the front
 * return new string
 */

function reverseString(str) {
    var newstring ="";
    for (var i =str.length -1; i>=0; i --){
        newstring = newstring + str[i];
    }
    return newstring;

}
console.log(reverseString(str1), reverseString(str1) == expected1);
console.log(reverseString(str2), reverseString(str2) == expected2);

/*module.exports = { caseInsensitiveStringCompare }; */