/* @flow */

import buildTree from './tree/.';
import printTree from './print/.';

export default (before: Object, after: Object) => {
  const tree = buildTree(before, after);
  return printTree(tree);
};
