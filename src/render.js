import _ from 'lodash';

const complex = (tree) => {
  const operand = {
    new: '+',
    delete: '-',
    change: ['+', '-'],
    same: ' ',
  };
  const singleNode = node => `${operand[node.state]} ${node.key}: ${node.value}\n`;
  const pairdNode = node => `${operand[node.state][0]} ${node.key}: ${node.value}\n` +
                            `${operand[node.state][1]} ${node.key}: ${node.oldValue}\n`;
  const indent = (str, count) => str.replace(/^(?!\s*$)/mg, ' '.repeat(count));
  const toString = (node, indentCount = 0) => {
    if (node.value instanceof Array) {
      return `${indent(node.key, 4)}: {\n` +
        `${[...node.value].reduce((acc, el) => [...acc, `${indent(toString(el, indentCount + 2), 4)}`], []).join('')}${indent('}\n', 4)}`;
    }
    if (_.isObject(node.value)) {
      const obj = node.value;
      return `${indent(operand[node.state], 4 - indentCount)} ${node.key}: {\n` +
        `${Object.keys(obj).reduce((acc, key) => [...acc, indent(`${key}: ${obj[key]}\n`, 8)], []).join('')}${indent('}\n', 4)}`;
    }
    return indent(`${node.oldValue ? pairdNode(node) : singleNode(node)}`, 2);
  };
  return `\n{\n${[...tree].reduce((acc, node) => [...acc, `${toString(node)}`], []).join('')}}`;
};

const plain = (tree) => {
  const toString = (node, parent = '') => {
    switch (node.state) {
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

const outputFormat = {
  complex,
  plain,
};

export default (tree, format) => outputFormat[format](tree);
