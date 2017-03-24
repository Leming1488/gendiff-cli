import gendiff from '../src';

const root = '__tests__/__fixtures__/';
const equalDiff =
`host: hexlet.io
+ timeout: 20
- timeout: 50
- proxy: 123.234.53.22
+ verbose: true
`;

test('fileNotFound', () => {
  expect(gendiff(`${root}json/before.json`, `${root}json/afte.json`)).toBeNull();
});

test('jsonDiff', () => {
  expect(gendiff(`${root}json/before.json`, `${root}json/after.json`)).toBe(equalDiff);
});

test('ymlDiff', () => {
  expect(gendiff(`${root}yml/before.yml`, `${root}yml/after.yml`)).toBe(equalDiff);
});

test('iniDiff', () => {
  expect(gendiff(`${root}ini/before.ini`, `${root}ini/after.ini`)).toBe(equalDiff);
});
