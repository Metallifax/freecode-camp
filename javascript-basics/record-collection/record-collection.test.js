/* eslint-disable */

const { expect } = require('@jest/globals');
const records = require('./record-collection.js');
const updateRecords = records.updateRecords;
const getRecordsObject = records.getRecordObject;
const collection = records.collection

test('After updateRecords(collection, 5439, "artist", "ABBA"), artist should be ABBA', () => {
  updateRecords(collection, 5439, 'artist', 'ABBA');
  expect(getRecordsObject(collection, 5439)['artist']).toBe('ABBA');
})

test('After updateRecords(collection, 2548, "artist", ""), artist should not be set', () => {
  updateRecords(collection, 2548, 'artist', '');
  expect(getRecordsObject(collection, 2548)['artist']).toBe(undefined);
})

test('After updateRecords(collection, 2548, "tracks", ""), tracks should not be set', () => {
  updateRecords(collection, 2548, 'tracks', '');
  expect(getRecordsObject(collection, 2548)['tracks']).toBe(undefined);
})

test('After updateRecords(collection, 1245, "tracks", "Addicted to Love"), tracks should have Addicted to Love', () => {
  updateRecords(collection, 1245, 'tracks', 'Addicted to Love');
  expect(getRecordsObject(collection, 1245)['tracks']).toContain('Addicted to Love');
})

test('After updateRecords(collection, 2468, "tracks", "Free"), tracks should have 1999 as the first element.', () => {
  updateRecords(collection, 2468, 'tracks', 'Free');
  expect(getRecordsObject(collection, 2468)['tracks'][0]).toBe('1999');
})

test('After updateRecords(collection, 1245, "albumTitle", "Riptide"), albumTitle should be Riptide', () => {
  updateRecords(collection, 1245, 'albumTitle', 'Riptide');
  expect(getRecordsObject(collection, 1245)['albumTitle']).toBe('Riptide');
})

test('After updateRecords(collection, 5439, "tracks", "Take a Chance on Me"), tracks should have Take a Chance on Me as the last element.', () => {
  updateRecords(collection, 5439, 'tracks', 'Take a Chance on Me');
  const arr = getRecordsObject(collection, 5439)['tracks'];
  expect(arr[arr.length - 1]).toBe('Take a Chance on Me');
}) 