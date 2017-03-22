import gendiff from '../src';

const filePath1 = '/examples/json/before.json';
const filePath2 = '/examples/json/afte';

test('fileNotFound', () => {
  expect(gendiff(filePath1, filePath2)).toBeNull();
});

const jsonPath1 = '/examples/json/before.json';
const jsonPath2 = '/examples/json/after.json';
const jsonEqual =
`host: hexlet.io
+ timeout: 20
- timeout: 50
- proxy: 123.234.53.22
+ verbose: true`;

test('jsonDiff', () => {
  expect(gendiff(jsonPath1, jsonPath2)).toBe(jsonEqual);
});

const ymlPath1 = '/examples/yml/before.yml';
const ymlPath2 = '/examples/yml/after.yml';
const ymlEqual =
        `host: hexlet.io
+ timeout: 20
- timeout: 50
- proxy: 123.234.53.22
+ verbose: true`;

test('ymlDiff', () => {
  expect(gendiff(ymlPath1, ymlPath2)).toBe(ymlEqual);
});
