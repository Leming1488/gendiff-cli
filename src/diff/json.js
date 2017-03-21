// @flow

import buildTree from './tree/.';

export default (json1, json2) => {
  const before = JSON.parse(json1);
  const after = JSON.parse(json2);
  const ar = buildTree(before, after);
  // const middle = Object.assign({}, before, after);
  // const ar = _.reduce(middle, (acc, value, key) => {
  //   if(_.has(before, key) && !_.isEqual(before[key], value)) {
  //     acc.set(`+ ${key}`, value);
  //     acc.set(`- ${key}`, before[key]);
  //     acc.delete(key);
  //   }
  //   if(_.has(before, key) && !_.has(after, key)) {
  //     acc.set(`- ${key}`, value);
  //     acc.delete(key);
  //   }
  //   if(!_.has(before, key)) {
  //     acc.set(`+ ${key}`, value);
  //   }
  //   return acc;
  // }, new Map(Object.entries(before)))
  return ar;
}
