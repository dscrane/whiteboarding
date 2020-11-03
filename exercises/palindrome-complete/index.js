// --- Directions
// Given a string, return true if the string is a palindrome-complete
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome-complete.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* SOLUTION 1 */
function palindrome(str) {
  return str.split('').reverse().join('') === str
}
/* ==== */

/* SOLUTION 2 */
  // Not ideal because of extra work done by the helper
  // but you can show why there is an issue with this code (doing twice as much work as needed)
  // also the code for this is very clunky looking and would take much longer to decipher someone looking at it for the
  // first time
// function palindrome(str) {
//   return str.split('').every((ch, i) => ch === str[str.length - i - 1])
// }
/* ==== */

palindrome('abba')

module.exports = palindrome;
