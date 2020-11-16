// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'



/*  MY SOLUTION  */
function steps(n) {
    for (let i=1; i<=n; i++) {
      let hCount = i;
      let sCount = n - i
      console.log('#'.repeat(hCount) + ' '.repeat(sCount))
    }
}

steps(5)
/* ==== */

/* ITERATIVE SOLUTION */
function stepsIterative(n) {
  for (let row = 0; row < n; row++) {
    let step = '';
    for (let col = 0; col < n; col++) {
      col <= row ? step += '#' : step += ' ';
    }
    console.log(step)
  }
}

stepsIterative(5)
/* ==== */
/* RECURSIVE SOLUTION */
function stepsRecursive(n, row = 0, step = '') {
  // Base case to stop recursive process
  if (n===row) {
    return;
  }

  // Case when the string is complete and needs to be logged to the console
  if (n === step.length) {
    console.log(step)
    // Iterate through the each step with the recursive function
    return stepsRecursive(n, row + 1)
  }

  // Case when we are still building the string
  const add = step.length <= row ? '#' : ' ';

  // Iterate through each character of the current step with the recursive function
  stepsRecursive(n, row, step + add)
}

// steps(5)
/* ==== */
module.exports = {steps, stepsIterative, stepsRecursive};
