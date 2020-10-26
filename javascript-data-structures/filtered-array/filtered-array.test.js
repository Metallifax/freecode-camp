/* eslint-disable */
const { TestScheduler } = require('jest');
const filtered = require('./filtered-array.js');

const filteredArray = filtered.filteredArray;

test('filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [ [10, 8, 3], [14, 6, 23] ]', () => {
  expect(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)).toStrictEqual([ [10, 8, 3], [14, 6, 23] ])
})

test('filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2) should return [ ["flutes", 4] ]', () => {
  expect(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2)).toStrictEqual([["flutes", 4]])
})

test('filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter") should return [ ["amy", "beth", "sam"] ]', () => {
  expect(filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter")).toStrictEqual([ ["amy", "beth", "sam"] ])
})
test('filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) should return [ ]', () => {
  expect(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)).toStrictEqual([])
})