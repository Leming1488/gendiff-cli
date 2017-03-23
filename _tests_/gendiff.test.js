import gendiff from '../src';

const filePath1 = '_tests_/_fixtures_/json/before.json';
const filePath2 = '_tests_/_fixtures_/json/afte';

test('fileNotFound', () => {
  expect(gendiff(filePath1, filePath2)).toBeNull();
});

const equalDiff =
`host: hexlet.io
+ timeout: 20
- timeout: 50
- proxy: 123.234.53.22
+ verbose: true
`;

const jsonPath1 = '_tests_/_fixtures_/json/before.json';
const jsonPath2 = '_tests_/_fixtures_/json/after.json';

test('jsonDiff', () => {
  expect(gendiff(jsonPath1, jsonPath2)).toBe(equalDiff);
});

const ymlPath1 = '_tests_/_fixtures_/yml/before.yml';
const ymlPath2 = '_tests_/_fixtures_/yml/after.yml';

test('ymlDiff', () => {
  expect(gendiff(ymlPath1, ymlPath2)).toBe(equalDiff);
});

const iniPath1 = '_tests_/_fixtures_/ini/before.ini';
const iniPath2 = '_tests_/_fixtures_/ini/after.ini';

test('iniDiff', () => {
  expect(gendiff(iniPath1, iniPath2)).toBe(equalDiff);
});
