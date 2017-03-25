import indent from 'indent-string';

const operand = {
  new: '+',
  delete: '-',
  same: ' ',
};

const toString = (node, indentCount = 0) => {
  if (node.value instanceof Set) {
    return `${indent(node.key, 4)}: {\n` +
      `${[...node.value].reduce((acc, el) => [...acc, `${indent(toString(el, indentCount + 2), 4)}`], []).join('')}${indent('}\n', 4)}`;
  }
  if (typeof node.value === 'object') {
    const obj = node.value;
    return `${indent(operand[node.state], 4 - indentCount)} ${node.key}: {\n` +
      `${Object.keys(obj).reduce((acc, key) => [...acc, indent(`${key}: ${obj[key]}\n`, 8)], []).join('')}${indent('}\n', 4)}`;
  }
  return indent(`${operand[node.state]} ${node.key}: ${node.value}\n`, 2);
};
export default tree => `\n{\n${[...tree].reduce((acc, node) => [...acc, `${toString(node)}`], []).join('')}}`;
