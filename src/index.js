// @flow

import fs from 'fs';

const ENCODING = 'utf8';

const readFile = file => fs.readFileSync(file, ENCODING);

const getFileExtension = fileName => fileName.slice().split('.').pop();

export default (file1, file2) => {
  const before = readFile(file1);
  const after = readFile(file2);
};
