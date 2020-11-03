// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

/* SOLUTION 1 */
function fizzBuzz(n) {
  for (let i=1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // (i % 15 === 0) can also be used here as the if conditional
      console.log('fizzbuzz')
    } else if (i % 3 !== 0 && i % 5 !== 0) {
      console.log(i)
    } else {
      i % 3 === 0 ? console.log('fizz') : console.log('buzz')
    }
  }
}
/* ==== */

/* SOLUTION 2 */
// Much codier and less impressive but can show you know your simple stuff pretty well
// const fizzBuzz = n => {
//   for (let i = 0; i < n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// };
/* ==== */

module.exports = fizzBuzz;
