
import gendiff from '../src';

const before = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
};

const after = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

const equal = {
  host: 'hexlet.io',
  '+ timeout': 20,
  '- timeout': 50,
  '- proxy': '123.234.53.22',
  '+ verbose': true,
};

test('gendiff', () => {
  expect(gendiff(before, after).toBe(JSON.stringify(equal)));
});
