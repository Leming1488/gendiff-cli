import _ from 'lodash';
import pairs from './pairs';

export default (before, after) => {
  const merge = Object.assign({}, before, after);
  const pair = _.reduce(merge, (acc, value, key) => {
    if (_.has(before, key) && _.has(after, key)) {
      return (_.isEqual(before[key], value) ? acc.add(new pairs.Same(key, before[key]))
              : acc.add(new pairs.Change(key, after[key], before[key])));
    }
    return (_.has(before, key) ? acc.add(new pairs.Delete(key, before[key])) :
            acc.add(new pairs.New(key, after[key])));
  }, new Set());
  return pair;
};
