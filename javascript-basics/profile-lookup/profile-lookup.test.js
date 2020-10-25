/* eslint-disable */
const { expect } = require('@jest/globals');
const lookup = require('./profile-lookup');
const lookUpProfile = lookup.lookUpProfile;
const contacts = lookup.contacts;

test('lookUpProfile("Kristian", "lastName") should return "Vos"', () => {
  expect(lookUpProfile('Kristian', 'lastName')).toBe('Vos')
})
test('lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]', () => {
  expect(lookUpProfile('Sherlock', 'likes')).toStrictEqual(['Intriguing Cases', 'Violin'])
})

test('lookUpProfile("Harry", "likes") should return an array', () => {
  expect(lookUpProfile('Sherlock', 'likes')).toBeArray();
})

test('lookUpProfile("Bob", "number") should return "No such contact"', () => {
  expect(lookUpProfile('Bob', 'number')).toBe('No such contact')
  })

test('lookUpProfile("Bob", "potato") should return "No such contact"', () => {
  expect(lookUpProfile('Bob', 'potato')).toBe('No such contact')
  })
test('lookUpProfile("Akira", "address") should return "No such property"', () => {
  expect(lookUpProfile('Akira', 'address')).toBe('No such property')
  })