import _ from 'lodash';

import Change from './Change';
import Delete from './Delete';
import Same from './Same';
import New from './New';

export default (before, after) => {
  const merge = Object.assign({}, before, after);
  const pair = _.reduce(merge, (acc, value, key) => {
    if (_.has(before, key) && _.has(after, key)) {
      return (_.isEqual(before[key], value) ? acc.add(new Same(key, before[key]))
             : acc.add(new Change(key, after[key], before[key])));
    }
    return (_.has(before, key) ? acc.add(new Delete(key, before[key])) :
      acc.add(new New(key, after[key])));
  }, new Set());
  return pair;
};
