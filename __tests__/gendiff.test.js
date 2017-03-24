import gendiff from '../src';

const root = '__tests__/__fixtures__/plain/';
const root2 = '__tests__/__fixtures__/nested/';
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
  // expect(gendiff(`${root}json/before.json`, `${root}json/after.json`)).toBe(equalPlainDiff);
  expect(gendiff(`${root2}json/before.json`, `${root2}json/after.json`)).toBe(equalNestedDiff);
});

test('ymlDiff', () => {
  expect(gendiff(`${root}yml/before.yml`, `${root}yml/after.yml`)).toBe(equalPlainDiff);
});

// test('iniDiff', () => {
//   expect(gendiff(`${root}ini/before.ini`, `${root}ini/after.ini`)).toBe(equalPlainDiff);
// });

// test('fileNotFound', () => {
//   expect(gendiff(`${root}json/before.json`, `${root}json/afte.json`)).toBeNull();
// });
