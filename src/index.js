// @flow

import fs from 'fs';

import jsonDiff from './diff/json';

const dirname = __dirname;
const ENCODING = 'utf8';

const readFile = file => fs.readFileSync(dirname + file, ENCODING);

const getFileExtension = fileName => fileName.slice().split('.').pop();

export default (file1, file2) => {
  const before = readFile(file1);
  const after = readFile(file2);

  const beforeExt = getFileExtension(file1);
  const afterExt = getFileExtension(file2);
  if (beforeExt === afterExt) {
    switch (beforeExt) {
      case 'json':
        return jsonDiff(before, after);
    }
  }
};
