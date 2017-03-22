// @flow

import buildTree from './tree/.';
import printTree from './print/.';

export default (before, after) => {
  const tree = buildTree(before, after);
  return printTree(tree);
};
