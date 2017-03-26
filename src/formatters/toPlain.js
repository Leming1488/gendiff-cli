import _ from 'lodash';

export default (tree) => {
  const toString = (node, parent = '') => {
    switch (node.type) {
      case 'new':
        return `Property '${parent}${node.key}' was added with ${_.isObject(node.value) ? 'complex value' : `value: ${node.value}`}\n`;
      case 'delete':
        return `Property '${parent}${node.key}' was removed\n`;
      case 'change':
        return `Property '${parent}${node.key}' was updated. From '${node.oldValue}' to '${node.value}'\n`;
      case 'same':
        if (node.value instanceof Array) {
          return node.value.reduce((acc, el) => [...acc, toString(el, `${node.key}.`)], []).join('');
        }
        return '';
      default:
        return '';
    }
  };
  return `\n${[...tree].reduce((acc, node) => [...acc, `${toString(node)}`], []).join('')}`;
};
