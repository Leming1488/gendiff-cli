/* @flow */

import fs from 'fs';
import path from 'path';
import compare from './compare';

const encoding = 'utf8';

const readFile = filePath => fs.readFileSync(filePath, encoding);

const getFileExt = filePath => path.parse(filePath).ext.substring(1);

const makeFile = filePath => ({ data: readFile(filePath), ext: getFileExt(filePath) });

export default (path1: string, path2: string) => {
  try {
    const file1 = makeFile(path1);
    const file2 = makeFile(path2);
    const diff = compare(file1, file2);
    return diff;
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
