import toComplex from './toComplex';
import toPlain from './toPlain';
import toJson from './toJson';

const outputFormat = {
  complex: toComplex,
  plain: toPlain,
  json: toJson,
};

export default (tree, format) => outputFormat[format](tree);
