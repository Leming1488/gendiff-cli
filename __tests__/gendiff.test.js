import path from 'path';
import gendiff from '../src';


const root1 = path.join(`${__dirname}`, '__fixtures__/plain');
const root2 = path.join(`${__dirname}`, '__fixtures__/nested');

const equalPlainDiff =
`
{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;

const equalNestedDiff =
`
{
    common: {
        setting1: Value 1
      - setting2: 200
        setting3: true
      - setting6: {
            key: value
        }
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
    }
    group1: {
      + baz: bars
      - baz: bas
        foo: bar
    }
    - group2: {
        abc: 12345
    }
    + group3: {
        fee: 100500
    }
}`;

test('jsonDiff', () => {
  expect(gendiff(`${root1}/before.json`, `${root1}/after.json`)).toBe(equalPlainDiff);
  expect(gendiff(`${root2}/before.json`, `${root2}/after.json`)).toBe(equalNestedDiff);
});

test('ymlDiff', () => {
  expect(gendiff(`${root1}/before.yml`, `${root1}/after.yml`)).toBe(equalPlainDiff);
  expect(gendiff(`${root2}/before.yml`, `${root2}/after.yml`)).toBe(equalNestedDiff);
});

test('iniDiff', () => {
  expect(gendiff(`${root1}/before.ini`, `${root1}/after.ini`)).toBe(equalPlainDiff);
  expect(gendiff(`${root2}/before.ini`, `${root2}/after.ini`)).toBe(equalNestedDiff);
});

test('fileNotFound', () => {
  expect(() => gendiff(`${root}json/before.json`, `${root}json/afte.json`)).toThrow();
});
