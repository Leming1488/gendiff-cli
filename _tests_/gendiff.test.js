import gendiff from '../src';

import jsonAfter from './after';
import jsonBefore from './before';

const jsonEqual = `
  host: hexlet.io,
  + timeout: 20,
  - timeout: 50,
  - proxy: 123.234.53.22,
  + verbose': true
`;

test('gendiff', () => {
  expect(gendiff(jsonBefore, jsonAfter).toBe((jsonEqual)));
});
