/* @flow */

import parse from './parse';
import build from './build';
import render from './render';

export default (file1: Object, file2: Object) => {
  const before = parse(file1);
  const after = parse(file2);
  const tree = build(before, after);
  return render(tree);
};
