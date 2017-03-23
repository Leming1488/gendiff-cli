/* @flow */

import fs from 'fs';
import path from 'path';

import diff from './diff';

const encoding = 'utf8';

const readFile = filePath => fs.readFileSync(filePath, encoding);

const getFileExt = filePath => path.parse(filePath).ext.substring(1);

const makeFile = filePath => ({ data: readFile(filePath), ext: getFileExt(filePath) });

export default (path1: string, path2: string) => {
  try {
    const before = makeFile(path1);
    const after = makeFile(path2);
    const rezult = diff(before, after);
    return rezult;
  } catch (err) {
    switch (err.code) {
      case 'ENOENT':
        console.error('File not found');
        break;
      default:
        console.error('error');
    }
  }
  return null;
};
