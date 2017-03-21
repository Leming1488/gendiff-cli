import gendiff from '../src';

import jsonAfter from './after.json';
import jsonBefore from './before.json';

const jsonEqual = `
host: hexlet.io,
+ timeout: 20,
- timeout: 50,
- proxy: 123.234.53.22,
+ verbose: true
`;

test('gendiff', () => {
  expect(gendiff('/../_tests_/after.json', '/../_tests_/before.json')).toBe(jsonEqual);
});
