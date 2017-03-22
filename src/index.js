/* @flow */

import fs from 'fs';
import path from 'path';
import YAML from 'yamljs';

import diff from './diff/';

const ENCODING = 'utf8';

const readFile = filePath => fs.readFileSync(path.join(process.cwd(), filePath), ENCODING);

const getFileExt = filePath => path.parse(filePath).ext;

export default (path1: string, path2: string) => {
  try {
    const before = readFile(path1);
    const after = readFile(path2);
    const beforeExt = getFileExt(path1);
    const afterExt = getFileExt(path2);
    if (beforeExt === afterExt) {
      switch (beforeExt) {
        case '.json':
          return diff(JSON.parse(before), JSON.parse(after));
        case '.yml':
          return diff(YAML.parse(before), YAML.parse(after));
        default: return null;
      }
    }
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
