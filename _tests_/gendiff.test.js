import gendiff from '../src';

const jsonPath1 = '/examples/before.json';
const jsonPath2 = '/examples/after.json';
const jsonEqual =
`host: hexlet.io
+ timeout: 20
- timeout: 50
- proxy: 123.234.53.22
+ verbose: true`;

test('jsonDiff', () => {
  expect(gendiff(jsonPath1, jsonPath2)).toBe(jsonEqual);
});
