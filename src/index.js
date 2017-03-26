/* @flow */

import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import getParser from './parsers';
import getRender from './formatters';

const encoding = 'utf8';

const readData = filePath => ({
  body: fs.readFileSync(filePath, encoding),
  ext: path.parse(filePath).ext });
const buildTree = (before, after) => Object.keys({ ...before, ...after }).reduce((acc, key) => {
  if (_.has(before, key) && _.has(after, key)) {
    if (_.isEqual(before[key], after[key])) {
      return [...acc, { type: 'same', key, value: before[key] }];
    } else if (typeof before[key] === 'object') {
      return [...acc, { type: 'same', key, value: buildTree(before[key], after[key]) }];
    }
    return [...acc, { type: 'change', key, value: after[key], oldValue: before[key] }];
  }
  return (_.has(before, key) ?
          [...acc, { type: 'delete', key, value: before[key] }] :
          [...acc, { type: 'new', key, value: after[key] }]);
}, []);

export default (path1: string, path2: string, outputFormat = 'complex') => {
  try {
    const dataFromFile1 = readData(path1);
    const dataFromFile2 = readData(path2);

    const parsedData1 = getParser(dataFromFile1);
    const parsedData2 = getParser(dataFromFile2);

    const treeFromMerge = buildTree(parsedData1, parsedData2);
    const diffFromMerge = getRender(treeFromMerge, outputFormat);

    return diffFromMerge;
  } catch (err) {
    switch (err.code) {
      case 'ENOENT':
        throw new Error('File not found');
      default:
        throw new Error('Error');
    }
  }
};
