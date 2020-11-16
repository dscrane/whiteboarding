const {pyramid, pyramidRecursive} = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('pyramid is a function', () => {
  expect(typeof pyramid).toEqual('function');
});

test('prints a pyramid for n = 2', () => {
  pyramid(2);
  expect(console.log.mock.calls[0][0]).toEqual(' # ');
  expect(console.log.mock.calls[1][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('prints a pyramid for n = 3', () => {
  pyramid(3);
  expect(console.log.mock.calls[0][0]).toEqual('  #  ');
  expect(console.log.mock.calls[1][0]).toEqual(' ### ');
  expect(console.log.mock.calls[2][0]).toEqual('#####');
  expect(console.log.mock.calls.length).toEqual(3);
});

test('prints a pyramid for n = 4', () => {
  pyramid(4);
  expect(console.log.mock.calls[0][0]).toEqual('   #   ');
  expect(console.log.mock.calls[1][0]).toEqual('  ###  ');
  expect(console.log.mock.calls[2][0]).toEqual(' ##### ');
  expect(console.log.mock.calls[3][0]).toEqual('#######');
  expect(console.log.mock.calls.length).toEqual(4);
});

test('pyramidRecursive is a function', () => {
  expect(typeof pyramidRecursive).toEqual('function');
});

test('prints a pyramid for n = 2', () => {
  pyramidRecursive(2);
  expect(console.log.mock.calls[0][0]).toEqual(' # ');
  expect(console.log.mock.calls[1][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('prints a pyramid for n = 3', () => {
  pyramidRecursive(3);
  expect(console.log.mock.calls[0][0]).toEqual('  #  ');
  expect(console.log.mock.calls[1][0]).toEqual(' ### ');
  expect(console.log.mock.calls[2][0]).toEqual('#####');
  expect(console.log.mock.calls.length).toEqual(3);
});

test('prints a pyramid for n = 4', () => {
  pyramidRecursive(4);
  expect(console.log.mock.calls[0][0]).toEqual('   #   ');
  expect(console.log.mock.calls[1][0]).toEqual('  ###  ');
  expect(console.log.mock.calls[2][0]).toEqual(' ##### ');
  expect(console.log.mock.calls[3][0]).toEqual('#######');
  expect(console.log.mock.calls.length).toEqual(4);
});
