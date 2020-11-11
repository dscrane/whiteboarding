// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


/* SOLUTION 1 */
/*
function anagrams(stringA, stringB) {
  // Helper function to create the character map for both strings
  const makeCharMap = (str) => {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
  }

  const aMap = makeCharMap(stringA);
  const bMap = makeCharMap(stringB)

  // Test if the character maps are the same length
    // if not the are not anagrams and should return FALSE
    // if so they might be anagrams
  if (Object.keys(aMap).length !== Object.keys(bMap).length) {
    return false
  } else {
    // Test if the two character maps are have the same same number of character counts
      // if so return TRUE if not return FALSE
    return Object.keys(aMap).every(char => aMap[char] === bMap[char])
  }
}
*/
/* ==== */

/* SOLUTION 2 */
function anagrams(stringA, stringB) {
  const cleanString = str => {
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
  }

  return cleanString(stringA) === cleanString(stringB)
}
/* ==== */

module.exports = anagrams;
