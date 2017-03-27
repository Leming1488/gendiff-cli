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
const equalPlainOutput = `
Property 'common.setting2' was removed
Property 'common.setting6' was removed
Property 'common.setting4' was added with value: blah blah
Property 'common.setting5' was added with complex value
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed
Property 'group3' was added with complex value
`;

const equalJsonOutput =
`{
  "common": {
    "setting1": "Value 1",
    "deleted": {
      "setting6": {
        "key": "value"
      }
    },
    "setting3": true,
    "added": {
      "setting5": {
        "key5": "value5"
      }
    }
  },
  "group1": {
    "changed": {
      "added": {
        "baz": "bars"
      },
      "deleted": {
        "baz": "bas"
      }
    },
    "foo": "bar"
  },
  "deleted": {
    "group2": {
      "abc": "12345"
    }
  },
  "added": {
    "group3": {
      "fee": "100500"
    }
  }
}`;
test('jsonDiff', () => {
  expect(gendiff(`${root1}/before.json`, `${root1}/after.json`)).toBe(equalPlainDiff);
  expect(gendiff(`${root2}/before.json`, `${root2}/after.json`)).toBe(equalNestedDiff);
  expect(gendiff(`${root2}/before.json`, `${root2}/after.json`, 'plain')).toBe(equalPlainOutput);
  expect(gendiff(`${root2}/before.json`, `${root2}/after.json`, 'json')).toBe(equalJsonOutput);
});

test('ymlDiff', () => {
  expect(gendiff(`${root1}/before.yml`, `${root1}/after.yml`)).toBe(equalPlainDiff);
  expect(gendiff(`${root2}/before.yml`, `${root2}/after.yml`)).toBe(equalNestedDiff);
  expect(gendiff(`${root2}/before.yml`, `${root2}/after.yml`, 'plain')).toBe(equalPlainOutput);
  expect(gendiff(`${root2}/before.yml`, `${root2}/after.yml`, 'json')).toBe(equalJsonOutput);
});

test('iniDiff', () => {
  expect(gendiff(`${root1}/before.ini`, `${root1}/after.ini`)).toBe(equalPlainDiff);
  expect(gendiff(`${root2}/before.ini`, `${root2}/after.ini`)).toBe(equalNestedDiff);
  expect(gendiff(`${root2}/before.ini`, `${root2}/after.ini`, 'plain')).toBe(equalPlainOutput);
  expect(gendiff(`${root2}/before.ini`, `${root2}/after.ini`, 'json')).toBe(equalJsonOutput);
});

test('fileNotFound', () => {
  expect(() => gendiff(`${root}json/before.json`, `${root}json/afte.json`)).toThrow();
});
