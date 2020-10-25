/* eslint-disable */
const rangeImport = require('./range');
const range = rangeImport.rangeOfNumbers

test('Your function should return an array.', () => {
  expect(range(1, 1)).toBeArray();
}) 
test('range(3) should return [3, 2, 1]', () => {
  expect(range(1, 3)).toStrictEqual([1, 2, 3]);
})
test('rangeOfNumbers(6, 9) should return [6, 7, 8, 9].', () => {
  expect(range(6, 9)).toStrictEqual([6, 7, 8, 9]);
})
test('rangeOfNumbers(4, 4) should return [4]', () => {
  expect(range(4, 4)).toStrictEqual([4]);
})