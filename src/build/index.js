import _ from 'lodash';
import pairs from './pairs';

const build = (before, after) => {
  const merge = Object.assign({}, before, after);
  const structure = _.reduce(merge, (acc, value, key) => {
    if (_.has(before, key) && _.has(after, key)) {
      if (_.isEqual(before[key], after[key])) {
        return acc.add(new pairs.Same(key, before[key]));
      } else if (typeof before[key] === 'object') {
        return acc.add(new pairs.Same(key, build(before[key], after[key])));
      }
      return acc.add(new pairs.New(key, after[key])).add(new pairs.Delete(key, before[key]));
    }
    return (_.has(before, key) ?
            acc.add(new pairs.Delete(key, before[key])) :
            acc.add(new pairs.New(key, after[key])));
  }, new Set());
  return structure;
};
export default build;
