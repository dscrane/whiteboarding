const palindrome = require('./index');

test('palindrome-complete function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"aba" is a palindrome-complete', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test('" aba" is not a palindrome-complete', () => {
  expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome-complete', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome-complete', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome-complete', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome-complete', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome-complete', () => {
  expect(palindrome('pennep')).toBeTruthy();
});
