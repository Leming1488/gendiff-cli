// @flow

import fs from 'fs';

import diff from './diff/';

const dirname = __dirname;
const ENCODING = 'utf8';

const readFile = path => fs.readFileSync(dirname + path, ENCODING);

const getFileExtension = fileName => fileName.slice().split('.').pop();

export default (path1, path2) => {
  const before = readFile(path1);
  const after = readFile(path2);

  const beforeExt = getFileExtension(path1);
  const afterExt = getFileExtension(path2);

  if (beforeExt === afterExt) {
    switch (beforeExt) {
      case 'json':
        return diff(JSON.parse(before), JSON.parse(after));
      default: return false;
    }
  }
  return true;
};
