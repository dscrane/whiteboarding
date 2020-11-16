// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2)
  for (let row = 0; row < n; row++) {
    let step = '';
    for (let col = 0; col < 2 * n - 1; col++) {
      if (midpoint - row  <= col && midpoint + row >= col) {
        step += '#'
      } else {
        step+=' '
      }
    }
    console.log(step)
  }
}

function pyramidRecursive(n, row = 0, step='') {
  const midpoint = Math.floor((2 * n - 1) / 2)

  if (n === row) {
    return;
  }

  if (step.length === 2 * n - 1) {
    console.log(step)
    return pyramidRecursive(n, row +1)
  }

  let add;
  if (midpoint - row <= step.length && midpoint + row >= step.length) {
    add = '#'
  } else {
    add =' '
  }

  pyramidRecursive(n, row, step + add)
}


module.exports = {pyramid, pyramidRecursive};
