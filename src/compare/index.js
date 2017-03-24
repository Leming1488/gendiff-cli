/* @flow */

import parse from './parse';
import build from './build';
import render from './render';

export default (file1: Object, file2: Object) => {
  const tree = build(parse(file1), parse(file2));
  return render(tree);
};
