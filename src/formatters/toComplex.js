import _ from 'lodash';

export default (tree) => {
  const operand = {
    new: '+',
    delete: '-',
    change: ['+', '-'],
    same: ' ',
  };
  const singleNode = node => `${operand[node.type]} ${node.key}: ${node.value}\n`;
  const pairedNode = node => `${operand[node.type][0]} ${node.key}: ${node.value}\n` +
                            `${operand[node.type][1]} ${node.key}: ${node.oldValue}\n`;
  const indent = (str, count) => str.replace(/^(?!\s*$)/mg, ' '.repeat(count));
  const toString = (node, indentCount = 0) => {
    if (node.value instanceof Array) {
      return `${indent(node.key, 4)}: {\n` +
        `${[...node.value].reduce((acc, el) => [...acc, `${indent(toString(el, indentCount + 2), 4)}`], []).join('')}${indent('}\n', 4)}`;
    }
    if (_.isObject(node.value)) {
      const obj = node.value;
      return `${indent(operand[node.type], 4 - indentCount)} ${node.key}: {\n` +
        `${Object.keys(obj).reduce((acc, key) => [...acc, indent(`${key}: ${obj[key]}\n`, 8)], []).join('')}${indent('}\n', 4)}`;
    }
    return indent(`${node.oldValue ? pairedNode(node) : singleNode(node)}`, 2);
  };
  return `\n{\n${[...tree].reduce((acc, node) => [...acc, `${toString(node)}`], []).join('')}}`;
};

